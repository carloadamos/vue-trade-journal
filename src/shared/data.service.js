import axios from 'axios';

const PORT = 3000;
const HOST = `http://localhost:${PORT}`;

const addTrade = async (trade) => {
  try {
    const response = await axios.post(`${HOST}/trades`, trade);

    return response.data;
  } catch (error) {
    console.log('addTrade error: ', error);
    return {};
  }
};

const getTrades = async () => {
  try {
    const response = await axios.get(`${HOST}/trades`);

    return response.data;
  } catch (error) {
    console.log('getTrades error: ', error);
    return [];
  }
};

// To be removed once vuex is implemented
const getTrade = async (id) => {
  try {
    const response = await axios.get(`${HOST}/trades/${id}`);

    return response.data;
  } catch (error) {
    console.log('getTrades error: ', error);
    return [];
  }
};

const updateTrade = async (trade) => {
  try {
    const response = await axios.put(`${HOST}/trades/${trade.id}`, trade);

    return response.data;
  } catch (error) {
    console.log('updateTrade error: ', error);
    return [];
  }
};

const deleteTrade = async (id) => {
  try {
    const response = await axios.delete(`${HOST}/trades/${id}`);

    return response.status;
  } catch (error) {
    console.log('deleteTrade error: ', error);
    return [];
  }
};

export const dataService = {
  addTrade,
  getTrade,
  getTrades,
  updateTrade,
  deleteTrade,
};
