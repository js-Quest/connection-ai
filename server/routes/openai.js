// do controllers later if need be, this is a simpler app right now
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req,res) => {
  try{
    const { text, activeChatId } = req.body;
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.5, //between 0-2, lower values are more strict; 0.8 would be more random.
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5, // -2 to 2.  Penalty for repeating same line.
      presence_penalty: 0 // -2 to 2, positive values increase model's likelihood of new topics.
    })

    //basically making call to handlesubmit
    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].text }, //grab text of response
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": process.env.BOT_USER_NAME,
          "User-Secret": process.env.BOT_USER_SECRET,
        }
      }
    )

    res.status(200).json({ text: response.data.choices[0].text })
  }catch(error){
    console.error("error", error)
    res.status(500).json({error: error.message})
  }
});

export default router;