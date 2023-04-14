const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.get("/", async function (req, res, next) {
  // console.log(configuration.apiKey);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "What is chat gpt? Please answer in Japanese.",
  });
  const result = completion.data.choices[0].text;
  console.log(completion.data.choices[0].text);
  res.json({ message: result });
});

module.exports = router;
