<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 w-100">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>default content</p>
          </component>          
        </keep-alive>
        <!-- <app-quote>
          <h2 class="q-header" slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote!</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'app-quote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
