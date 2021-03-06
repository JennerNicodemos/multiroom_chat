// Importar as configurações do servidor
let app = require('./config/server')

// Parametrizar a porta de escuta
let server = app.listen(3000, function(){
    console.log('Servidor online')
})

let io = require('socket.io').listen(server)

app.set('io', io)

// Criar conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function(){
        console.log('Usuário se desconectou')
    })

    socket.on('msgParaServidor', function(data){
        
        // Dialogo
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        // Participantes
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            )
    
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            )
        }
    })
})