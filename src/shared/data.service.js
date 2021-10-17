import * as axios from 'axios';
import { HOST } from './config';

const getTrades = async () => {
  try {
    const response = await axios.get(`${HOST}/trades`);

    return response.data;
  } catch (error) {
    console.log(`error ${error}`);
    return [];
  }
};

const getTrade = async (id) => {
  try {
    const response = await axios.get(`${HOST}/trades/${id}`);

    console.log('getTrade', response.data);
    return response.data;
  } catch (error) {
    console.log(`error ${error}`);
    return [];
  }
};

const addTrade = async (trade) => {
  try {
    const response = await axios.post(`${HOST}/trades`, trade);

    return response.data;
  } catch (error) {
    console.log('error');
    return null;
  }
};

const updateTrade = async (trade) => {
  try {
    const response = await axios.put(`${HOST}/trades/${trade.id}`, trade);

    return response.data;
  } catch (error) {
    console.log('error');
    return null;
  }
};

const deleteTrade = async (id) => {
  try {
    await axios.delete(`${HOST}/trades/${id}`);

    return id;
  } catch (error) {
    console.log('error');
    return null;
  }
};

export const dataService = {
  addTrade,
  deleteTrade,
  getTrade,
  getTrades,
  updateTrade,
};
