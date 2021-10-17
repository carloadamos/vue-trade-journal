<template>
  <div class="container">
    <div class="title is-1">Trade Entry</div>
    <div class="box add-entry-form">
      <div class="field">
        <label class="label">Symbol</label>
        <input class="input" type="text" v-model="trade.symbol" />
      </div>
      <div class="field">
        <label class="label">Entry Price</label>
        <input class="input" type="text" v-model="trade.entryPrice" />
      </div>
      <div class="field">
        <label class="label">Stoploss</label>
        <input class="input" type="text" v-model="trade.stoploss" />
      </div>
      <div class="field">
        <label class="label">Target Price</label>
        <input class="input" type="text" v-model="trade.targetPrice" />
      </div>
      <div class="field">
        <label class="label">Outcome</label>
        <input class="input" type="text" v-model="trade.outcome" />
      </div>
      <button class="button is-primary add-trade" @click="save">
        Add Trade
      </button>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared/data.service';

export default {
  name: 'TradeEntry',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      trade: {},
      isAddMode: true,
    };
  },
  async created() {
    if (this.id) {
      this.isAddMode = false;
      this.trade = await dataService.getTrade(this.id);
    }
  },
  methods: {
    async save() {
      if (this.isAddMode) {
        await dataService.addTrade(this.trade);
      } else {
        await dataService.updateTrade(this.trade);
      }
      this.$router.push({ name: 'trades' });
    },
  },
};
</script>

<style scoped>
.add-entry-form {
  display: flex;
  flex-direction: column;
}

.add-trade {
  margin-right: auto;
}

.label {
  text-align: left;
}
</style>
