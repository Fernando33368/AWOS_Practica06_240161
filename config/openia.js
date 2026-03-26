import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.groq.com/openai/v1', 
  headers: {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export default openai;