import socket
import sys

'''
import maya.cmds as mc
mc.commandPort(name=":20180",sourceType="python")
'''
BUFFER = 4096  # maya default buffer size
PORT = 20181
ADDR = ('localhost', PORT)

if len(sys.argv) > 1:
    port = sys.argv[1]

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

# SEND DATA TO MAYA
command = 'polySphere -n "newLocator";'
# command = 'print("hello")'
client.sendall(bytes(command, 'utf-8'))
# client.sendall(command.encode()) # this also works

# RECIEVE DATA
data = client.recv(BUFFER)
data = data.decode()
print(data)

# close the connection
client.close()
