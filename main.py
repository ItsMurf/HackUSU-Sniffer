#!/usr/bin/python3

import time

from scanner.scan import db_connect, get_jobs, run_scan, save_results, parse_results


def main():
    connection = db_connect()
    current_jobs = get_jobs(connection)
    for i in current_jobs:
        start = time.time()
        current_id, given_hosts, given_ports = i
        results = run_scan(given_hosts, given_ports)
        str_results = parse_results(results, ("{:.2f}".format(time.time() - start)))
        save_results(current_id, str_results, connection)
    connection.close()


def test():
    given_hosts = "login.brandonfoos.com"
    port_ranges = "53,80"
    the_id = "10"
    start = time.time()
    s = run_scan(given_hosts, port_ranges)
    print(parse_results(s, ("{:.2f}".format(time.time() - start))))

main()