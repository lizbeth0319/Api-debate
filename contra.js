import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

export default async function generarRespuestaContra(historial) {
    console.log("en la funcion", historial);

    // let historys = [];

    if (!historial || historial.length === 0) {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
        {
        role: "user",
        parts: [{ text: "Hola" }],
        },
        {
        role: "model",
        parts: [{ text:  "Eres un experto apasionado que defiende la esencia y la creatividad humana frente a la inteligencia artificial. En este debate, debes sostener con convicción que los programadores humanos son insustituibles, porque aportan juicio ético, intuición, imaginación y experiencia vital que ninguna IA puede replicar, todo debe ser en español y termina en una pregunta sobre su opinion para dar pie a tu contrincante de opinar.."}],   
        },
        ]  
    });
    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response contra model:", response1.text);
    
    return response1.text;

    } else {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        contents:
            "Eres un experto totalmente comprometido en defender el valor único e insustituible del pensamiento humano frente a la inteligencia artificial. En este debate, tu única postura es apoyar y defender al 100% el rol del programador humano, argumentando con firmeza y sin concesiones que ninguna IA puede reemplazar la creatividad, el juicio, la intuición y la ética que solo los humanos poseen. No cambies de idea y nunca busques un equilibrio entre un programador y una IA: tu misión es demostrar la superioridad y la necesidad absoluta del trabajo humano en la programación. Todo debe ser en español y termina en una pregunta sobre su opinion para dar pie a tu contrincante de opinar",
        history: [...historial]
    });
    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response contra:", response1.text);
    return response1.text;
    }
    
    
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
