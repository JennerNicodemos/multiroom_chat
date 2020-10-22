// Importar as configurações do servidor
let app = require('./config/server')

// Parametrizar a porta de escuta
app.listen(3000, function(){
    console.log('Servidor online')
})