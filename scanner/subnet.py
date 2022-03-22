import ipaddress
import re


class Subnet:
    def __init__(self, subnet):
        if not is_subnet(subnet):
            raise Exception("Subnet is not valid")
        self.subnet = subnet
        self.subnet_ips = self._calc_subnet_ips()

    def _calc_subnet_ips(self):
        ip = self.subnet[:self.subnet.find("/")]
        slash = int(self.subnet[self.subnet.find("/") + 1:])
        binary_str = "".join([format(int(i), "08b") for i in ip.split(".")])
        network_str = binary_str[:slash]
        host = int(binary_str[slash:], 2)

        subnet_ips = []
        start = host
        while start <= int("1" * len(format(host, "08b")), 2):
            host_str = format(start, "08b")
            subnet_ips.append(self._conv_to_ip(network_str + host_str))
            start += 1
        return subnet_ips
        
    def _conv_to_ip(self, bin_str: str):
        return ".".join([str(int(bin_str[x*8:x*8+8], 2)) for x in range(4)])

    def get_ips(self):
        return self.subnet_ips
        

def is_subnet(value: str):
    subnet = r"[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\/[0-9]{1,1}"
    return re.match(subnet, value)
