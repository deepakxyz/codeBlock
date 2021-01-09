import socket
import threading

HEADER = 1024
PORT = 5050
# SERVER = "192.168.10.9"  # local ip address
# socket.gethosetname() gives the desktop name
SERVER = socket.gethostbyname(socket.gethostname())
ADDR = (SERVER, PORT)  # bind the server and the port
FORMAT = 'utf-8'  # decode method
DISCONNET_MESSAGE = "!DISCONNECT"


# socket.AF_INET is type of a socket
# scoket.SOCK_STREAM is type of a streaming method
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(ADDR)


def handle_client(conn, addr):
    print(f"[NEW CONNECTION] {addr} connected.")

    connected = True
    while connected:
        # find the message length and pass it in to the messgae
        msg_length = conn.recv(HEADER).decode()
        if msg_length:
            msg_lenght = int(msg_length)
            msg = conn.recv(msg_length).deocde(FORMAT)
            if msg == DISCONNET_MESSAGE:
                connected = False
            print(f"[{addr}] {msg}")

    conn.close()


def start():
    server.listen()
    print(f"[LISTENING] Server is listening on {SERVER}")
    while True:
        conn, addr = server.accept()
        thread = threading.Thread(target=handle_client, args=(conn, addr))
        thread.start()
        print(f"[ACTIVE CONNECTION] {threading.activeCount() - 1}")


print("[STARTING] server is starting")
start()
