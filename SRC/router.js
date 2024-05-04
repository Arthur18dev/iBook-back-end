const express = require('express');
const router = express.Router();
const db = require('./db/conexao')



const usuarios = require('./controllers/usuarios')
const login = require('./controllers/login')
const livros = require('./controllers/livros')
const categoria = require('./controllers/categoria')
const administrador = require('./controllers/administrador')


// Router usuarios
router.get('/usuarios', usuarios.getAll)
router.post('/usuarios', usuarios.createUsuario)
router.put('/usuarios/:id', usuarios.editarUsuario)
router.delete('/usuarios/:id', usuarios.deleteUsuario)


// Router login
router.post('/login', login.Logado)

// Router Livros
router.get('/livros', livros.Livraria)
router.get('/livrosPorCategoria', livros.LivrariaPorCategoria)

// Router categoria
router.get('/categoria', categoria.destaque)

// Router Administrador
router.get('/administrador', administrador.getAdministrador)
router.post('/administrador', administrador.createAdministrador)
router.put('/administrador/:id', administrador.editarAdministrador)
router.delete('/administrador/:id', administrador.deleteAdministrador)

router.get('/', function (req, res) {
  res.send({ message: 'Olá Arthur' })
})

router.get('/rapaz', function (req, res) {
  let data = req.query
  let message = ''

  if (data.search !== undefined) {
    message = ' Como vai? ' + data.search
  }
  res.json({
    message: 'Oi camarada' + message,
  })
})


// Rotas Usuarios

///////////////////////



module.exports = router
