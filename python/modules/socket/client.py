import socket

HEADER = 64
PORT = 5050
FORMAT = 'utf-8'  # decode method
DISCONNET_MESSAGE = "!DISCONNECT"
SERVER = socket.gethostbyname(socket.gethostname())
ADDR = (SERVER, PORT)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

name = input("Enter your name:")
client.send(bytes(name, 'utf-8'))

print(client.recv(1024).decode())

client.close()
