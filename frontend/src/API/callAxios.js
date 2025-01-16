import axios from 'axios';

const callAxios = async (method, endPoint, payload) => {
  try {
    const response = await axios({
      method: method.toUpperCase(),
      url: `http://localhost:7500/${endPoint}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default callAxios;
