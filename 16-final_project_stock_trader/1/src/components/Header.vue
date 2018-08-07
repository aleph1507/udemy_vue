<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  <button class="navbar-toggler"
      type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
      <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
    </ul>
      <ul class="navbar-nav ml-auto">
        <li><a href="#" @click="endDay">End Day</a></li>
        <li class="nav-item dropdown">
         <a
           class="nav-link dropdown-toggle"
           href="#"
           id="navbarDropdownMenuLink"
           role="button"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           @click="isDropdownOpen = !isDropdownOpen">
             Save & Load
         </a>
         <div
           class="dropdown-menu"
           :class="{show: isDropdownOpen}"
           aria-labelledby="navbarDropdownMenuLink"
           >
           <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
           <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
         </div>
       </li>
      </ul>
      <strong class="navbar-text ml-auto">Funds: {{ funds | currency}}</strong>
  </div>
</nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
          randomizeStocks: 'randomizeStocks',
          fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>
