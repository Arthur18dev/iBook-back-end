const express = require('express');
const router = express.Router();
const db = require('./db/conexao')



const usuarios = require('./controllers/usuarios')

// Router usuarios
router.get('/usuarios', usuarios.getAll)
router.post('/usuarios', usuarios.createUsuario)
router.put('/usuarios/:id', usuarios.editarUsuario)
router.delete('/usuarios/:id', usuarios.deleteUsuario)


router.get('/', function (req, res) {
    res.send({ message: 'Olá Arthur'})
  })
  
  router.get('/rapaz', function(req, res) {
    let data = req.query
    let message = ''
  
    if(data.search !== undefined) {
      message = ' Como vai? ' + data.search
    }
    res.json({
      message: 'Oi camarada' + message,
    })
  })
  
  
  // Rotas Usuarios
 
  ///////////////////////
  
  router.post('/login', function(req, res){
  
    let { email, senha } = req.body 
  
    if(!email){
      res.json({ message: "Email não pode ser vazio!", erro: true})
    }
  
    if(!senha){
      res.json({ message: "Senha não pode ser vazio!", erro: true})
    }
  
    // Verificar se existe Credenciais
    db.query(
      `SELECT * FROM usuarios WHERE email = "${email}" AND senha = "${senha}"`,
      function (err, results) {
        if (err)
          res.json({ message: "Falha no sistema!", erro: true })
  
          if(results.length > 0)
          res.json({ message: "Login com sucesso!", erro: false })
  
          res.json({ message: "Login não encontrado!", erro: true })
  
      }
    );
  })

module.exports = router
