module.exports.startChat = function(application, req, res) {

    let dataForm = req.body

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15)
    
    let error = req.validationErrors()

    if (error) {
        res.render('index', {validation: error})
        return
    }
    
    
    res.render('chat')
}