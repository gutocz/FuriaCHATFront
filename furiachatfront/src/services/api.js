import axios from 'axios';
import { API_URL } from '../config/env';

export const sendMessage = async (message) => {
  try {
    const res = await axios.post(`${API_URL}/chat`, { message });
    return res.data.response;
  } catch (error) {
    console.error('Erro ao enviar mensagem', error);
    return "Ops! Algo deu errado.";
  }
};
