import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared/data.service';

Vue.use(Vuex);

const state = () => ({
  trades: [],
});

const mutations = {
  addTrade(state, trade) {
    state.trades.push(trade);
  },

  getTrades(state, trades) {
    state.trades = trades;
  },

  deleteTrade(state, id) {
    state.trades = [...state.trades.filter((t) => t.id !== id)];
  },
};

const actions = {
  async addTrade({ commit }, trade) {
    const addedTrade = await dataService.addTrade(trade);
    commit('addTrade', addedTrade);
  },

  async getTrades({ commit }) {
    const trades = await dataService.getTrades();
    commit('getTrades', trades);
  },

  async deleteTrade({ commit }, id) {
    const deletedTradeId = await dataService.deleteTrade(id);
    console.log('deletedId', deletedTradeId);
    commit('deleteTrade', deletedTradeId);
  },
};

const getters = {
  getTradeById: (state) => (id) => state.trades.find((s) => s.id === id),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
