<template>
  <div class="hello">
    <h1>Logic</h1>
    <div class="ex">
      <h2>Conditional rendering </h2>
      <h3 v-if="show">Vue is awesome!</h3>
      <h3 v-else>Oh no 😢</h3>
        <b>Show: {{show}}</b><br>
        <button  @click="showHide" type="button"  >click to increment</button>
    </div>
    
    <hr>

    <div class="ex">
      <h2>List</h2>
      <div class="row">
        <span v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    for(let i=0; i<10; i++)
    {
      this.todos.push({
        id:i,
        text:"todo #"+i
      });
    }
  },
   data() {
    return {
      show:false,
      todos: [],
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
    },
    showHide(){
      this.show=!this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 1vw;
}
.ex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 2vw;
  padding: 1vw;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
}
span {
  width: 15vw;
  margin: 1vw;
}
</style>
