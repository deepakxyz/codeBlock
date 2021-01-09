import socket

BUFFER = 4096
PORT = 18811
ADDR = ('localhost', PORT)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)


client.close()
