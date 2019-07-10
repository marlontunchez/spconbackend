var express = require('express');
const requireToken = require('../middlewares/requireToken');
var uscontroller = require('../Controllers/CursoController.js');
var usuariorequest = require("../Request/UsuarioRequest");
var app = express.Router();
app.get('/cursos',  uscontroller.getall);
app.post('/cursos/edit',  uscontroller.editar);
app.put('/cursos/delete', uscontroller.eliminar);
app.post('/cursos/create',  usuariorequest, uscontroller.crear);

module.exports = app;