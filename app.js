import express from "express";
import { generarRespuestaContra } from "./contra.js";
import { generarRespuestaAFavor } from "./afavor.js";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(express.static("public"));

let historial = [];

/* app.get("/api/afavor", async (req, res) => {
    const rta = await generarRespuestaAFavor(historial);
    console.log("impresion", rta);
    //historial.push([{ role: "user", parts: [{ text: rta }] ,experto:"afavor" }]);

    if( historial.length === 0){
            historial.push({ role: "user", parts: [{ text: rta }] ,experto:'a favor'});
        }else{
            historial.push({ role: "model", parts: [{ text: rta }] ,experto:'a favor'});
        }

    res.json(rta);
}); */
app.get("/api/afavor", async (req, res) => {
    const rta = await generarRespuestaAFavor(historial);
    console.log("impresion", rta);

    if( historial.length === 0){
        historial.push({ role: "user", parts: [{ text: rta }] ,experto:'a favor'});
    }else{
        historial.push({ role: "model", parts: [{ text: rta }] ,experto:'a favor'});
    }
 
    res.json(rta); // <-- se manda la respuesta al index
});

app.get("/api/contra", async (req, res) => {
    console.log("historial en http", historial);
    const respuesta = await generarRespuestaContra(historial);
    console.log('Respuesta de la IA:', respuesta);

        if(!historial || historial.length === 0){
            historial.push({ role: "user", parts: [{ text: respuesta }] ,experto:'en contra'});
        }else{
            historial.push({ role: "model", parts: [{ text: respuesta }] ,experto:'en contra'});
        }
    
    res.json(respuesta);// <-- se manda la respuesta al index
});
 

app.get("/api/historial", (req, res) => {
    res.json(historial);
});

/*Limpiar el historial de conversaciones en la BD
o Exportar la conversación a PDF
o Eliminar una respuesta
o Modificar una respuesta*/

const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http: ${PORT}`);
    mongoose
    .connect("mongodb://127.0.0.1:27017/debate")
    .then(() => console.log("BD Connected!"));
});
