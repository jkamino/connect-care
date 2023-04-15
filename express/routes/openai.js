const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post("/title", async function (req, res, next) {
  const prompt =
    "Please read the following new sentence, and Think a title for a fundraiser to solve this issue.the title must be English.Return title only.---";
  try {
    const message = req.body.message;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt + message }],
    });

    const result = response.data.choices[0].message.content;
    res.json({ message: result });
  } catch (e) {
    console.log(e);
    res.json({ message: "Error Occured." });
  }
});

router.post("/description", async function (req, res, next) {
  const prompt =
    "Please read the following new sentence, and Think a dxescription calling for donations to solve this issue.the description must be English. and it must be 200 words or less.---";
  try {
    const message = req.body.message;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt + message }],
    });

    const result = response.data.choices[0].message.content;
    res.json({ message: result });
  } catch (e) {
    console.log(e);
    res.json({ message: "Error Occured." });
  }
});
module.exports = router;
