import openai from '../config/openia.js';

const render = (req, res) => {
  res.render('ai', { response: null });
};

const generate = async (req, res) => {
  try {
    const r = await openai.post('/chat/completions', {
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "user", content: req.body.prompt }
      ]
    });

    res.render('ai', {
      response: r.data.choices[0].message.content
    });

  } catch (error) {
    console.error("ERROR COMPLETO:", error.response?.data || error.message)
    res.render('ai', {
      response: "Se genero un error al dar la respuesta. Intentalo mas tarde..."
    });
  }
};

export default {
  render,
  generate
};