const net = require('net');
const readline = require('readline');

function startClient(address, port) {
    const client = new net.Socket();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite uma mensagem: ', (message) => {
        client.connect(port, address, () => {
            console.log('Conectado ao servidor');
            client.write(message);
            rl.close();
        });
    });

    client.on('data', (data) => {
        console.log('Resposta do servidor:', data.toString());
        client.end();
    });

    client.on('close', () => {
        console.log('Conexão encerrada');
    });

    client.on('error', (err) => {
        console.error(`Erro na conexão: ${err.message}`);
    });
}

const DESTINATION = 'localhost';
const PORT = 6000;

startClient(DESTINATION, PORT);
