import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

export default async function generarRespuestaContra(historial) {
    console.log("en la funcion", historial);
        
    let history=[];

    if (!historial || historial.length === 0) {
        history = [
            { role: "user",
            parts: [{ text: "inicia una coversacion en contra de las IA y a favor  de los programadores,"}],  }
        ];
    } else {
    
        history = [...historial];
    }
    const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        contents:
            "Actúa como un experto que defiende el valor del pensamiento humano frente a las IA. Usa argumentos sólidos sobre cómo la inteligencia artificial no puede reemplazar a los programadores. Estás en un debate, defiende con firmeza el rol humano.",
        //history: history,
    });

    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response contra:", response1.text);
    return response1.text;
}

import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.static("public"));

export { generarRespuestaContra };
/*
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

export default async function generarRespuestaContra(historial) {
    console.log("en la funcion", historial);

    const chat = ai.chats.create({
        model: "gemini-2.0-flash",

        contents:
            "Actúa como un experto que defiende el valor del pensamiento humano frente a las IA. Usa argumentos sólidos sobre cómo la inteligencia artificial no puede reemplazar a los programadores. Estás en un debate, defiende con firmeza el rol humano.",
        history: [
            {
                role: "user",
                parts: [{ text: "inicia una coversacion a favor de las IA y en contra de los programadores,"}],
            },
            {
                role: "model",
                parts: historial,
            },
        ]
    });

    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log(historial);

    console.log("Chat response contra:", response1.text);
    return response1.text;
    
}
import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.static("public"));

export { generarRespuestaContra };*/