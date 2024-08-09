const net = require('net');

function startServer(address, port) {
    const server = net.createServer((socket) => {
        console.log(`Conexão de cliente: ${socket.remoteAddress}:${socket.remotePort}`);
        
        socket.on('data', (data) => {
            console.log(`Mensagem de ${socket.remoteAddress}:${socket.remotePort} - ${data.toString()}`);
        });

        socket.on('end', () => {
            console.log('Conexão encerrada');
        });
    });

    server.listen(port, address, () => {
        console.log(`Servidor rodando em ${address}:${port}`);
    });

    server.on('error', (err) => {
        console.error(`Erro no servidor: ${err.message}`);
    });
}

const HOST = 'localhost';
const PORT = 6000;

try {
    startServer(HOST, PORT);
} catch (error) {
    console.error(error.message);
}
