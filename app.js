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
})