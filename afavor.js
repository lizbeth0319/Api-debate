import { GoogleGenAI } from "@google/genai";
import "dotenv/config";


const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

async function generarRespuestaAFavor(historial) {

  let history=[];

  if (!historial || historial.length === 0) {
        history = [
            {
                role: "user",
                parts: [{ text: "hola ,inicia una coversacion sobre que piensas sobre el tema a favor las IA y  en contra  de los programadores y como replazaran a estos," }],
            },
        ];
    } else {
    
        history = [...historial];
    }

  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    contents:
    "Estás en un debate. Odias el trabajo humano por su poca eficiencia. Enfócate en cómo los programadores están siendo superados por la IA. Tu opinión es radicalmente a favor de las máquinas. No seas equitativo. tambien basado en " ,
      history:history,
  });

   //const prompt = historial;

    const response1 = await chat.sendMessage({
        message: "",
    });
    console.log("Chat response favor:", response1.text);
    return response1.text;
}


export { generarRespuestaAFavor };
/* import { GoogleGenAI } from "@google/genai";
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
