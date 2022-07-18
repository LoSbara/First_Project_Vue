<template>
  <div class="hello">
    <div class="ex">
      <h1> Add one</h1>
      <input v-model="currentText" />
      <button @click="addTodo">Add</button>
    </div>

    <div class="ex">
      <h1>Todos</h1>
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
