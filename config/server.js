// Importar o módulo do framework express
let express = require('express')

// Importar o módulo do consign
let consign = require('consign')

// Importar o módulo do body-paresr
let bodyParser = require('body-parser')

// importar o módulo do express-validador
let expressValidator = require('express-validator')

// Iniciar o objeto express
let app = express()

// Setar as variáveis 'views engine' e 'views' no express
app.set('view engine', 'ejs')
app.set('views', './app/views')

// Configurar o middleware express static
app.use(express.static('./app/public'))

// configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}))

// Configurar o middleware express-validator
app.use(expressValidator())

// Efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

// exportar o objeto app
module.exports = app