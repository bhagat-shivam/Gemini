

import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

// dotenv.config({ path: "C:\\Users\\shiva\\OneDrive\\Desktop\\gemini-clone\\.env" });

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("API key is missing. Please set in your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp", // Valid model name
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
      history: [], 
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





