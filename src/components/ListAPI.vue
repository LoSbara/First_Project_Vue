<template>
  <div class="hello">
    <div class="ex">
      <h1> Add one</h1>
      <input v-model="currentText" /> <button @click="addTodo">Add</button>
    </div>
    
    <div class="ex">
      <h1>Todos</h1>
      <div class="column">
        <span v-for="(todo) in todos" :key="todo.id">
          {{todo.id}} - {{ todo.priority }}  - {{ todo.description }} | {{ todo.date }} ({{todo.checked}})
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: async function(){

    let items= await axios.post("http://localhost:8080/task/history",{id: 1});
    console.log(items.data);

    this.todos=items.data.list;
    
  },
   data() {
    return {
      show:false,
      todos: [],
      currentText:""
    }
  },
  methods: {
    addTodo() {
       this.todos.push({
        id:this.todos.length+1,
        text:this.currentText
      });
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

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
}

span {
  border: 2px solid green;
  border-radius: 2vw;
  margin: 1vw;
  width: 80%;
  padding: 1vw;
}
</style>
