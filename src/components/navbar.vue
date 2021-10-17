<template>
  <nav class="column is-2 menu">
    <p class="menu-label">
      Trade Journal
    </p>
    <ul class="menu-list">
      <router-link to="/">Dashboard</router-link>
      <router-link :to="{ name: 'entry', params: { id: 0 } }"
        >Trade Entry</router-link
      >
      <router-link to="/trades">Trades</router-link>
    </ul>
  </nav>
</template>
