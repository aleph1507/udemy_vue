<template>
  <div class="component green">
    <h3>You may edit the user here</h3>
    <p>Edit me</p>
    <p>User age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from'../main';

  export default {
    props: ['userAge'],
    methods: {
      editAge() {
        // this.userAge = 30;
        // this.$emit('ageWasEdited', this.userAge);
        // eventBus.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(30);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      })
    }
  }
</script>

<style scoped>
  div.green {
    background-color: lightgreen;
  }
</style>
