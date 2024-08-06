import socket

def start_server(address:str, port:int):
    server_socket = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    server_socket.bind((address,port))

    print(f'Server Rodando.. {address} - {port}')

    while True:
        data, address_client = server_socket.recvfrom(1024)
        print(f'{address_client}-Mensagem: {data.decode()}')


if __name__=="__main__":
    HOST = 'localhost'
    PORT = 8000
    start_server(HOST,PORT)