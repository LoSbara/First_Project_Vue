<template>
  <div class="hello">
    <h1>Basics</h1>
    <div class="ex">
      <h2> Binding 1 way </h2>

      <b>{{ message }}</b><br>
      <!-- attribute set -->
      <input v-bind:value="message" type="text"/><br>
      <input :value="message" type="text"/><br>
    </div>
    <hr>

    
    <div class="ex">
      <h2>Code update </h2>

      <b>{{ message }}</b><br>
      <!-- attribute set -->
      <input v-bind:value="message" type="text"/> <br>
      <input :value="message" type="text"/><br>
    </div>

    <hr>
    
    <div class="ex">
      <h2> Binding 2 way </h2>

      <b>Data changing: {{message2}}</b><br>
      <input v-model="message2" type="text"/>
    </div>

    <hr>
    
    <div class="ex">
      <h2> Events </h2>

      <b>Click count: {{count}}</b><br>
      <button  @click="increment" type="button"  >click to increment</button>
      <hr>
    </div>

    <hr>

    <div class="ex">
      <h2>Conditional rendering </h2>
      <h2 v-if="show">Vue is awesome!</h2>
      <h2 v-else>Oh no 😢</h2>
        <b>Show: {{show}}</b><br>
        <button  @click="showHide" type="button"  >click to increment</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
      message: 'Hello Giacomo!',
      message2: 'Hello world 2',
      count:0,
      show:false
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

input {
  border: 1px solid black;
  border-radius: 1vw;
  width: 80%;
  height: 4vw;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
