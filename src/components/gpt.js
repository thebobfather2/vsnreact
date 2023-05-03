const openai = require('openai');


async function generateResponse(prompt) {
  try {
    const completions = await openai.completions.create({
      engine: 'davinci',
      prompt,
      maxTokens: 60,
      n: 1,
      stop: '\n',
    });
    const { choices } = completions.data;
    return choices[0].text.trim();
  } catch (err) {
    console.error(err);
    return 'Sorry, there was an error processing your request.';
  }
}

module.exports = { generateResponse };
