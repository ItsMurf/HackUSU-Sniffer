import socket
import threading
import mysql.connector

from scanner.ports import COMMON_PORTS
from scanner.services import TCP, UDP
from scanner.settings import DB_NAME, DB_USER, DB_PASSWORD
from scanner.subnet import Subnet, is_subnet


TIMEOUT = .2
THREADS = 64
LOCALHOST = "127.0.0.1"


def db_connect():
    sniff_db = None
    try:
        sniff_db = mysql.connector.connect(
                user = DB_USER,
                password = DB_PASSWORD,
                database = DB_NAME
        )
        print(f"Connection Status: SUCCESS =  {sniff_db}")
    except Exception as err:
        print(f"Error: '{err}'")
    return sniff_db


def threaded_scan(host: str, ports: list, results: dict, num_threads: int=1):
    threads = []
    thread_len = len(ports) // num_threads
    for i in range(num_threads):
        current_ports = ports[i*thread_len:(i+1)*thread_len] if i < num_threads-1 else ports[i*thread_len:]
        current_thread = threading.Thread(
            target=scan_port_range,
            args=(current_ports, host, results)
            )
        threads.append(current_thread)
        current_thread.start()
    for thread in threads:
        thread.join()


def parse_results(results: dict, timestamp: float):
    converted = {}
    for ip in results:
        tcp_total = []
        udp_total = []
        for port in results[ip]:
            tcp, udp = results[ip][port]
            if tcp:
                tcp_service = socket.getservbyport(port, "tcp") or "Not Detected"
                tcp_total.append((port, tcp_service))
            if not udp:
                udp_service = socket.getservbyport(port, "udp") or "Not Detected"
                udp_total.append((port, udp_service))
        
        tcp = "<h4>TCP Results:</h4> <table><tr><th>IP</th><th>Port</th><th>Status</th><th>Service</th></tr>" + "".join([f"<tr><td>{ip}</td><td>{tp[0]}</td><td>Open</td><td>{tp[1]}</td></tr>" for tp in tcp_total]) if tcp_total else "No Open TCP Ports\n"
        udp = "\n<h4>UDP Results:</h4> <table><tr><th>IP</th><th>Port</th><th>Status</th><th>Service</th></tr>" + "".join([f"<tr><td>{ip}</td><td>{up[0]}</td><td>Open</td><td>{up[1]}</td></tr>" for up in udp_total]) if udp_total else "\nNo Open UDP Ports"
        converted[ip] = f"{tcp}</table>"
    
    return f"<h3>Completed in {timestamp} seconds</h3>" + "\n".join([converted[host] for host in converted])


def scan_port_range(ports: list, ip: str, results: dict):
    for port in ports:
        tcp = scan_port(port, ip, socket.SOCK_STREAM)
        udp = scan_port(port, ip, socket.SOCK_DGRAM)
        if tcp or not udp:
            results[ip][port] = tcp, udp


def scan_port(port: str, ip: str, proto: socket.SocketKind):
    ip = socket.gethostbyname(ip)
    conn = socket.socket(socket.AF_INET, proto)  # socket.SOCK_DGRAM
    conn.settimeout(TIMEOUT)
    res = conn.connect_ex((ip, int(port)))
    conn.close()
    return not bool(res)


def generate_port_range(ranges: list):
    ports = []
    for sec in ranges:
        if "-" in sec:
            start, end = sec.split("-")
            if start.isnumeric() and end.isnumeric():
                for port in range(int(start), int(end) + 1, 1):
                    ports.append(int(port))
        elif sec.isnumeric():
            ports.append(int(sec))
    return ports


def split_string(hosts: str):
    interim = hosts.split(",")
    return [host.strip() for host in interim]


def debug_results(results: dict):
    for host in results:
        for port in results[host]:
            tcp, udp = results[host][port]
            if tcp or udp:
                print(port, tcp, udp)


def run_scan(given_hosts: str, given_ports: str):
    if given_ports == "*":
        port_ranges = COMMON_PORTS
    else:
        port_ranges = split_string(given_ports)
    results = {}

    for host in split_string(given_hosts):
        if is_subnet(host):
            subnet = Subnet(host)
            subnet_ips = subnet.get_ips()
            for ip in subnet_ips:
                results[ip] = {}
                ports = generate_port_range(port_ranges)
                threaded_scan(ip, ports, results, THREADS)
        else:
            results[host] = {}
            ports = generate_port_range(port_ranges)
            threaded_scan(host, ports, results, THREADS)
    
    return results


def get_jobs(conn: mysql.connector.MySQLConnection):
    query = "SELECT id, host, ports FROM `query` WHERE result IS NULL ORDER BY id DESC;"
    cursor = conn.cursor()
    cursor.execute(query)
    query_results = cursor.fetchall()
    cursor.close()
    return query_results


def save_results(id: str, results: str, conn: mysql.connector.MySQLConnection):
    cursor = conn.cursor()
    query = "UPDATE `query` SET result = '" + results + "' WHERE  id = " + str(id) + ";"
    cursor.execute(query)
    conn.commit()
    cursor.close()
    print(cursor.rowcount, "record(s) changed. Connection Closed.")
