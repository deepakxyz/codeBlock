import socket

PORT = 5050  # prot range 0 - 65535
SERVER = socket.gethostbyname(socket.gethostname())
ADDR = (SERVER, PORT)


# socket.AF_INET is type of a socket
# scoket.SOCK_STREAM is type of a streaming method
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(ADDR)  # bind takes excaly one arrg


def start():
    server.listen(3)  # number of connections to the server
    print(f"[LISTENING] Server is listening on {SERVER}")
    while True:
        # conn - is the client socket , addr - is the address
        conn, addr = server.accept()
        name = conn.recv(1024).decode()
        print(f"Connected with {addr}, {name}")

        conn.send(bytes("Hello form the Flint Server", 'utf-8'))
        conn.close()


print("[STARTING] server is starting")
start()
