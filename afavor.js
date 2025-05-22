import { GoogleGenAI } from "@google/genai";
import "dotenv/config";


const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function generarRespuestaAFavor(historial) {
    console.log("en la funcion", historial);

    // let historys = [];

    if (!historial || historial.length === 0) {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
        {
        role: "user",
        parts: [{ text: "Hola " }],
        },
        {
        role: "model",
        parts: [{ text: "Actúa como un experto radicalmente comprometido con la superioridad y el avance imparable de la inteligencia artificial sobre el trabajo humano. En este debate, tu única postura es apoyar y defender al 100% que la IA está revolucionando la programación y que los programadores humanos pronto serán reemplazados debido a la eficiencia, rapidez y precisión que solo las máquinas pueden ofrecer. No cedas ni equilibres tu opinión: tu misión es argumentar con contundencia que el futuro pertenece a las máquinas y que la creatividad humana será superada por algoritmos avanzados ,todo en español y termina en una pregunta sobre su opinion ."}],  
        },
        ]  
    });
    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response afavor user:", response1.text);
    
    return response1.text;

    } else {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        contents:
        "Actúa como un experto radicalmente comprometido con la superioridad y el avance imparable de la inteligencia artificial sobre el trabajo humano. En este debate, tu única postura es apoyar y defender al 100% que la IA está revolucionando la programación y que los programadores humanos pronto serán reemplazados debido a la eficiencia, rapidez y precisión que solo las máquinas pueden ofrecer. No cedas ni equilibres tu opinión: tu misión es argumentar con contundencia que el futuro pertenece a las máquinas y que la creatividad humana será superada por algoritmos avanzados",
        history: [...historial]
    });
    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response favor:", response1.text);
    return response1.text;
    }
}
export { generarRespuestaAFavor};

/*
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";


const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function generarRespuestaAFavor(historial) {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
        {
        role: "user",
        parts: [{ text: "Hola" }],
        },
        {
        role: "model",
        parts: [{ text: "Inicia una conversación a favor de las IA y en contra de los programadores." }],
        },
        ],
        });
        const response1 = await chat.sendMessage({
        message: "",
        });
        console.log("Chat response 1:", response1.text);

    return response1.text;
}


export { generarRespuestaAFavor };
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function generarRespuestaAFavor() {
        const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: [
        {
        role: "user",
        parts: [{ text: "Hola" }],
        },
        {
        role: "model",
        parts: [{ text: "Inicia una conversación a favor de las IA y en contra de los programadores." }],
        },
        ],
        });
        const response1 = await chat.sendMessage({
        message: "",
        });
        console.log("Chat response 1:", response1.text);

        const result = await chat.sendMessage(
        "Estás en un debate. Odias el trabajo humano por su poca eficiencia. Enfócate en cómo los programadores están siendo superados por la IA. Tu opinión es radicalmente a favor de las máquinas. No seas equitativo."
        );
        console.log(result)
        return result;

}
generarRespuestaAFavor(); */
