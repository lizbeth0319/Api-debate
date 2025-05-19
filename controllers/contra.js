import contra from "../models/historial"

app.get("/api/contra", async (req, res) => {
    console.log("historial en http", historial);
    const respuesta = await generarRespuestaContra(historial);
    console.log('Respuesta de la IA:', respuesta);

        if(!historial || historial.length === 0){
            historial.push({ role: "user", parts: [{ text: respuesta }] ,experto:'en contra'});
        }else{
            historial.push({ role: "model", parts: [{ text: respuesta }] ,experto:'en contra'});
        }
    

    res.json(respuesta);
});