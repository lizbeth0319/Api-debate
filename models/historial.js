/* import mongoose from "mongoose";


const historial = new mongoose.Schema({
    respuesta:{type:String},
});

export default mongoose.model("historial",historial) */
/* --------------------------------------- */


    import mongoose from "mongoose";

const historial = new mongoose.Schema(
{
    role: { type: String, required: true },
    respuesta: { type: String, required: true },
    experto: { type: String, required: true },
    },
{ timestamps: true } 
);

export default mongoose.model("historial",historial) 

/*type: String: Esto indica que el campo qestá destinado a contener un valor de cadena.
required: trueEsta restricción exige que el campo qsiempre tenga un valor. Si no se proporciona un valor al crear o actualizar un registro asociado a este esquema,
se generará un error o la validación fallará*/