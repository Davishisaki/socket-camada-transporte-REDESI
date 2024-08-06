import socket

def start_client(address:str, port:int):
    client_socket = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

    while True:
        message = input('Digite uma mensagem: ').encode()
        client_socket.sendto(message,(address,port))

if __name__=="__main__":
    HOST = 'localhost'
    PORT = 8000
    start_client(HOST,PORT)