import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

dotenv.config({ path: './.env' });

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("API key is missing. Please set GEMINI_API_KEY in your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "models/chat-bison-001", // Valid model name
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [], // Optionally, include prior conversation context
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text);
    return result.response.text; // Return the response for further usage
  } catch (error) {
    console.error("Error while generating response:", error.message);
    throw error; // Rethrow the error for the caller to handle
  }
}

export default run;
