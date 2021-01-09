import socket
import threading
import nuke
from nukescripts import utils


HOST = 'localhost'
PORT = 50007


class server():

    def __init__(self, host=HOST, port=PORT):
        for res in socket.getaddrinfo(host, port, socket.AF_UNSPEC, socket.SOCK_STREAM, 0, socket.AI_PASSIVE):
            af, socktype, proto, canonname, sa = res
            try:
                self.s = socket.socket(af, socktype, proto)
            except socket.error, msg:
                self.s = None
                continue
            try:
                self.s.bind(sa)
                self.s.listen(1)
            except socket.error, msg:
                self.s.close()
                self.s. = None
                continue
            break

        if not self.s:
            raise RuntimeError, "Unable to initialise server."

    def start(self):
        (conn, addr) = self.s.accept()
        print('Connection from', addr)
        while 1:
            data = conn.recv(1024)
            if not data:
                break
            print("command", data)
            utils.executeInMainThread(nuke.createNode, (data,))
        conn.close()


def start_server(host=HOST, port=PORT):
    s = server(host, port)
    s.start()


def thread_server():
    t = threading.Thread(None, start_server)
    t.start()
