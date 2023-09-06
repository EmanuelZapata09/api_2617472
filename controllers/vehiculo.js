const {response}= require('express')

//Importancia de los modelos
const Vehiculo = require('../models/vehiculo')

//Metodo GET de la API
const vehiculoGet = async (req, res = response) =>{
    //const {nombre} = req.query //Desestructuracion

    //Consultar todos los Vehiculos
    const vehiculos = await Vehiculo.find()

    res.json({ //RESPUESTA EN JSOn
        vehiculos
    })
   
}
//Método POST de la api
const vehiculoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query //Captura de atributos
    console.log(body);
    try {
        const vehiculo = new Vehiculo(body) //Instanciando el objeto
        await vehiculo.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)

    }
    res.json({
        msg: mensaje
    })

}

//MODIFICACION
const vehiculoPut = async (req,res)=>{
    const {placa,referencia,modelo,chasis,color} = req.query
    let mensaje= 'Modificacion Exitosa'
    try{
        const vehiculo = await Vehiculo.updateMany({placa: placa},{referencia:referencia})
    }
    catch(error){
        mensaje= 'Se presentaron problemas en la modificacion'
    }
    res.json({
        msg: mensaje
    })
}

//DELETE
const vehiculoDelete = async(req,res)=>{
    const {_id} = req.query
    let mensaje="La eliminacion se efectuo correctamente"
    try{
        const vehiculo= await Vehiculo.deleteOne({_id:_id})
    }
    catch(error){
        mensaje='Se presentaron problemas en la eliminacion'
    }
    res.json({
        msg: mensaje
    })
}


module.exports= {
    vehiculoGet, 
    vehiculoPost,
    vehiculoPut,
    vehiculoDelete
}