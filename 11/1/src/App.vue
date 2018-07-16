<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <h1>Filters and mixins</h1>
      <p>{{ text | to-uppercase | to-lowercase }}</p>
      <hr>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
      <hr>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
import List from './List.vue';

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello there'
    };
  },
  filters: {
    'to-uppercase'(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  created() {
    console.log('app created');
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
