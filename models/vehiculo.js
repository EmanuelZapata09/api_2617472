const {Schema, model} = require('mongoose')


//Definicion de estructura
const VehiculoSchema = Schema ({
    placa: {
        type: String,
        unique: true,
        required: true                    

    },
    referencia:{
        type: String,
        required: true                
    },
    modelo: {
        type: String,
        required: true            
    },
    chasis: {
        type: String,
        required: true            
    },
    color: {
        type: String,
        required: true            
    }
})

//Exportar la funcion UsuarioSchema
module.exports = model('Vehiculo', VehiculoSchema)