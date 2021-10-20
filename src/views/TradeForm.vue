<template>
  <div class="container">
    <section class="hero is-primary mb-5">
      <div class="hero-body">
        <p class="title">
          {{ viewTitle }}
        </p>
      </div>
    </section>

    <div v-if="message" class="notification is-success">
      {{ message }}
    </div>
    <div class="field">
      <p class="control">
        <a class="button is-danger" @click="deleteTrade">
          Delete
        </a>
      </p>
    </div>
    <form class="form">
      <div class="field">
        <label class="label">Symbol</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Symbol"
            v-model="trade.symbol"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Entry</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Entry"
            v-model="trade.entry"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Stoploss</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Stoploss"
            v-model="trade.stoploss"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Target</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Target"
            v-model="trade.target"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Outcome</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Outcome"
            v-model="trade.outcome"
          />
        </div>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary" @click="save(trade)">
            Submit
          </a>
        </p>
        <p class="control">
          <a class="button is-light" @click="goBack()">
            Cancel
          </a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { dataService } from '@/shared';

export default {
  name: 'TradeForm',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isAddMode: false,
      message: '',
      trade: {},
      viewTitle: 'Trade Entry',
    };
  },
  async created() {
    if (!this.id) {
      this.isAddMode = true;
    } else {
      this.viewTitle = 'Edit Trade Entry';
      this.trade = await dataService.getTrade(this.id);
    }
  },
  methods: {
    async save() {
      if (this.isAddMode) {
        const addedTrade = await dataService.addTrade(this.trade);
        this.message = addedTrade
          ? `Successfully added ${addedTrade.symbol}`
          : 'Error processing request ...';
      } else {
        const updatedTrade = await dataService.updateTrade(this.trade);
        this.message = updatedTrade
          ? `Successfully updated ${updatedTrade.symbol}`
          : 'Error processing request ...';
      }

      if (this.message) this.clearForm();
    },
    async deleteTrade() {
      const deletedTrade = await dataService.deleteTrade(this.trade.id);
      this.message = deletedTrade
        ? `Successfully deleted ${this.trade.symbol}`
        : 'Error processing request ...';

      if (this.message) this.clearForm();
    },
    clearForm() {
      this.trade = {};
    },
    goBack() {
      this.$router.push({ name: 'trades' });
    },
  },
  computed: {
    notificationMessage() {
      return `${this.message} is added`;
    },
  },
};
</script>
