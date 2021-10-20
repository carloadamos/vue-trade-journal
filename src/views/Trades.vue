<template>
  <div class="container">
    <section class="hero is-primary mb-5">
      <div class="hero-body">
        <p class="title">
          Trades
        </p>
      </div>
    </section>

    <div class="field">
      <button class="button" @click="openForm(0)">Add Entry</button>
    </div>
    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead>
        <th>ID</th>
        <th>Symbol</th>
        <th>Entry</th>
        <th>Stoploss</th>
        <th>Target</th>
        <th>Outcome</th>
      </thead>
      <tbody>
        <tr v-for="trade in trades" :key="trade.id" @click="openForm(trade.id)">
          <td>{{ trade.id }}</td>
          <td>{{ trade.symbol }}</td>
          <td>{{ trade.entry }}</td>
          <td>{{ trade.stoploss }}</td>
          <td>{{ trade.target }}</td>
          <td>{{ trade.outcome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { dataService } from '@/shared';

export default {
  name: 'Trades',
  data() {
    return {
      trades: [],
    };
  },
  async created() {
    this.trades = await dataService.getTrades();
  },
  methods: {
    openForm(id) {
      this.$router.push({ name: 'form', params: { id } });
    },
  },
};
</script>

<style>
tr {
  cursor: pointer;
}
</style>
