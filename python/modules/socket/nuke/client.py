import socket
import threading
import nuke
from nukescripts import utils

HOST = 'localhost'
PORT = 50007


class client():

    def __init__(self, host=HOST, port=PORT):
        for res in socket.getaddrinfo(host, port, socket.AF_UNSPEC, socket.SOCK_STREAM, 0, socket.AI_PASSIVE):
            af, socktype, proto, canonname, sa = res
            try:
                self.s = socket.socket(af, socktype, proto)
            except socket.error, msg:
                self.s = None
                continue
            try:
                self.s.connect(sa)
            except socket.error, msg:
                self.s.close()
                self.s = None
                continue
            break

        if not self.s:
            raise RuntimeError, "Unable to initialise client."

    def send(self, msg):
        self.s.send(msg)

    def close(self):
        self.s.close()
