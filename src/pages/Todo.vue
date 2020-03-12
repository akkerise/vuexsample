<template>
  <div>
    THIS IS TODO
    <ul v-for="todo in todos" :key="todo.id">
      <li>{{ todo.title }}</li>
    </ul>
  </div>
</template>
<script>
  import {mapState, mapGetters} from "vuex";

  export default {
    name: "Todo",
    components: {},
    computed:{
      ...mapState('todo', ['todos', 'todo'])
    },
    data(){
      return {
        
      }
    },
    methods: {
    }
  };
</script>
<style>
</style>
