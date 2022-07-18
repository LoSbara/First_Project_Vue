<template>
    <title>User</title>
	<div class="body">
		<div class="container">
			<div id="option">
				<h1 class="h13">{{user}}</h1>
				<div id="logout">
					<input id="outButton" type="button" value="Logout" @click="logout()">
				</div>
			</div>

			<div class="rowContainer">
				<div class="title">
					Add Notes 
                    <input @click="changeButton" type="button" value="+" id="button"/>
				</div>
			</div>
			<form action='AddNoteServlet' method='POST'>
				<b v-if="message==null" class="error">{{message=""}}</b>
				<div id="columnContainer">
					<div class="column">
						<div class="row" id="text">
							<div class="text">Note intended for:</div>
							<div class="text">Description:</div>
							<div class="text">Priority:</div>
						</div>
						<div class="row">
							<div class="text">
								<input v-model="currentDate" type="date" class="input" name='dateNote'>
							</div>
							<div class="text">
								<input v-model="currentDescription" type='text' class="input" name='description'>
							</div>
							<div class="text">
								<select v-model="currentPriority" name="priority" class="input">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
								</select>
							</div>
						</div>
					</div>
					<div class="row2">
						<div>
							<input type="button" class="button" value='Add' @click="invia()">
						</div>
					</div>
				</div>

				<div class="date">{{date}}</div>
			</form>
		</div>
		<table>
			<tr>
				<th>Check</th>
				<th>Move</th>
				<th>Date</th>
				<th>Priority</th>
				<th>Description</th>
				<th>Delete</th>
			</tr>
            <tr v-for="(todo) in todos" :key="todo.id">
				<td>
					<input type="checkbox" value="true">
					<input class="check" type="button" name="check" value="check" @click="check(todo.id)">
				</td>
				<td class="td">
					<input class="su" type="button" name="+" value="+" @click="incrementaPriorita(todo.id)">
					<input class="giu" type="button" name="-" value="-" @click="decrementaPriorita(todo.id)">
				</td>
				<td>{{ todo.date }}</td>
				<td>{{ todo.priority }}</td>
				<td>{{ todo.description }}</td>
				<td class="td">
					<input type="button" value="Delete" @click="deleteTask(todo.id)">
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
import axios from 'axios';
var date = new Date();
export default {
  name: 'login',
  props: {
    msg: String
  },
  mounted: async function(){

    let items= await axios.post("http://localhost:8080/task/history",{id: localStorage.idUser});
    console.log(items.data);

    this.todos=items.data.list;
    
  },
    data() {
    return {
        user: "Benvenuto", 
        todos: [],
        message: "ciao",//request.getParameter("messaggio"),
        date: date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
    }
  },
  methods: {
	async invia() {
		let newTask={
			date: this.currentDate, 
			description: this.currentDescription, 
			priority: this.currentPriority, 
			idUser: localStorage.idUser
		};
		console.log(newTask);
		let item= await axios.post("http://localhost:8080/task/add",newTask);
		let insertTask = {
			date: this.currentDate, 
			description: this.currentDescription, 
			priority: this.currentPriority, 
			idUser: localStorage.idUser,
			checked: false,
			deleted: false
		}
		this.todos.push(insertTask);
		console.log(item);
    },
	async logout() {
		this.message = "";
		try {
			localStorage.idUser="";
			this.$router.push('/login')
			console.log(localStorage.idUser)
		} catch (Error) {
			this.message = "Logout Fallito";
		}
    },
	check(id)
	{
		alert("check "+id);
	},
	deleteTask(id)
	{
		alert("elimina "+id);
	},
	incrementaPriorita(id)
	{
		alert("incrementa "+id);
	},
	decrementaPriorita(id)
	{
		alert("decrementa "+id);
	},
    changeButton() {
        if (document.getElementById("button").value == "+") {
            document.getElementById("button").value = "x";
            document.getElementById("columnContainer").style.display = "block";
            document.getElementById("button").style.padding = "0 0 1vw 0";
        } else {
            document.getElementById("button").value = "+";
            document.getElementById("columnContainer").style.display = "none";
            document.getElementById("button").style.padding = "0 0 0 0";
        }
    }
  }
}
</script>

<style>
body {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.h13 {
	align-items: center;
	text-align: center;
	width: 100%;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.rowContainer {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	height: 5vw;
	
}

#columnContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	border: 1px solid black;
	border-radius: 2vw;
	padding: 1vw;
	display: none;
}

.column {
	display: flex;
	flex-direction: row;
}

#option {
	display: flex;
	flex-direction: row;
}

#logout {
	position: absolute;
	right: 1vw;
	width: 5vw;
	align-items: right;
	text-align: right;
	padding-top: 1vw;
}

#outButton {
	width: 6vw;
	height: 3vw;
	border: 1px solid black;
	border-radius: 1vw;
	background-color: red;
	border: 1px solid black;
}

h1 {
	width: 60vw;
	align-items: right;
	text-align: right;
}

#button {
	text-align: center;
	font-size: 3vw;
	font-weight: bold;
	border: 1px solid black;
	border-radius: 50%;
	width: 4vw;
	height: 4vw;
	background-color: rgb(210, 210, 210);
}

.title {
	align-items: center;
	text-align: center;
	width: 30vw;
	height: 3vw;
	font-size: 3vw;
	font-weight: bold;
	height: 3vw;
}

.text {
	align-items: center;
	text-align: center;
	width: 15vw;
	height: 3vw;
	font-size: 1vw;
	height: 3vw;
}

.row2 {
	text-align: center;
}

.input {
	border: 1px solid black;
	border-radius: 1vw;
	width: 10vw;
}

input {
	vertical-align: center;
	align-items: center;
	text-align: center;
}

.date {
	width: 30vw;
	height: 3vw;
	text-align: center;
	align-items: center;
	margin-top: 2vw;
}

.error {
	color: red;
	text-align: center;
}

.a {
	margin-top: 1vw;
}

.submit {
	border-radius: 1vw;
	text-align: center;
	font-size: 1vw;
	height: 3vw;
	width: 5vw;
	background-color: rgb(10, 148, 214);
	text-align: center;
}

.su {
	border-radius: 50% 50% 0 0;
}

.giu {
	border-radius: 0 0 50% 50%;
}

table {
	align-items: center;
	width: 99vw;
	height: 15vw;
	font-size: 2vw;
	border: 3px solid black;
	border-radius: 2vw;
	padding: 1vw;
}

th {
	border: 2px solid black;
	align-items: center;
	text-align: center;
}

td {
	border: 1px solid black;
	align-items: center;
	text-align: center;
}

.td {
	padding-bottom: 1vw;
}
</style>