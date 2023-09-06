const {Router} = require('express')
//Desestructuracion. EXtrar un atributo de un objeto

const route = Router()

//importar metodos del controlador
const {vehiculoGet, vehiculoPost, vehiculoPut, vehiculoDelete} = require('../controllers/vehiculo')

route.get('/',vehiculoGet) //Listar datos

route.post('/',vehiculoPost) //Insertar Datos

route.put('/',vehiculoPut) //Modificar Datos

route.delete('/', vehiculoDelete) //Eliminar Datos

module.exports = route

//APP - SERVER - ROUTE - CONTROLLADOR - MODELO