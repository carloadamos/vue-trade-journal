<template>
  <div class="container">
    <div class="title is-1">Trades</div>
    <table
      class="
table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Symbol</th>
          <th>Entry</th>
          <th>Stoploss</th>
          <th>Target Price</th>
          <th>Outcome</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trade in trades" :key="trade.id">
          <th>{{ trade.id }}</th>
          <th>{{ trade.symbol }}</th>
          <th>{{ trade.entryPrice }}</th>
          <th>{{ trade.stoploss }}</th>
          <th>{{ trade.targetPrice }}</th>
          <th>{{ trade.outcome }}</th>
          <th>
            <div class="buttons">
              <button
                class="button is-info is-light"
                @click="editTrade(trade.id)"
              >
                Edit
              </button>
              <button
                class="button is-danger is-light"
                @click="removeTrade(trade.id)"
              >
                Delete
              </button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TradeList',
  data() {
    return {
      message: '',
    };
  },
  async created() {
    await this.loadTrades();
  },
  methods: {
    ...mapActions(['getTrades', 'deleteTrade']),
    async loadTrades() {
      this.message = 'Loading trades ... Please wait.';

      await this.getTrades();
      this.message = '';
    },
    editTrade(id) {
      this.$router.push({ name: 'entry', params: { id } });
    },
    async removeTrade(id) {
      await this.deleteTrade(id);
    },
  },
  computed: {
    ...mapState(['trades']),
  },
};
</script>

<style scoped></style>
