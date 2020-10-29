const { emit } = require("../../config/server")

module.exports.startChat = function(application, req, res) {

    let dataForm = req.body

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15)
    
    let error = req.validationErrors()

    if (error) {
        res.render('index', {validation: error})
        return
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido: dataForm.apelido, mensagem:  'acabou de entrar no Chat'}
    )
    
    
    res.render('chat')
}