<template>
    <title>Registrazione</title>
	<div class="body2">
		<div class="container2">
			<h1 class="h12">Welcome in Registration</h1>
			<form action='RegistrationServlet' method='POST'>
				<b v-if="message!=''" class="error2">{{message}}</b>
				<div class="rowContainer2">
					<div class="column2">
						<div class="row12" id = "text2">
							<div class="text2">Name:</div>
							<div class="text2">Surname:</div>
							<div class="text2">Email:</div>
							<div class="text2">Password:</div>
						</div>
						<div class="row12">
							<div class="text2">
								<input v-model="currentName" type='text' name='name'>
							</div>
							<div class="text2">
								<input v-model="currentSurname" type='text' name='surname'>
							</div>
							<div class="text2">
								<input v-model="currentEmail" type='text' name='email'>
							</div>
							<div class="text2">
								<input v-model="currentPassword" type='password' name='password'>
							</div>
						</div>
					</div>
					<div class="row22">
						<div>
							<input class="submit2" type='button' value='Registration' @click="registrati()">
						</div>
					</div>
				</div>
				<div class="date2">{{date}}</div>
			</form>
		</div>
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
   data() {
    return {
      message: "ciao",//request.getParameter("messaggio"),
      date: date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate()
    }
  },
  methods: {
	async registrati() {
		let newUser={
			name: this.currentName, 
			surname: this.currentSurname, 
			email: this.currentEmail, 
			password: this.currentPassword
		};
		console.log(newUser);
		this.message = "";
		try {
			let item= await axios.post("http://localhost:8080/user/registra",newUser);
			console.log(item);
		} catch (Error) {
			this.message = "Email gia esistente";
		}
		this.$router.push('/login')
    }
  }
}
</script>

<style>
.container2 {
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
}

.h12 {
    text-align: center;
    align-items: center;
}

.rowContainer2 {
	border: 1px solid black;
	border-radius: 2vw;
	background-color: rgb(210, 210, 210);
}

.column2 {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
}

#text2 {
	margin-right: 1vw;
}

.row12 {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 1vw;
	width: 24vw;
}

.row22 {
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 1vw;
}

.text2 {
	text-align: right;
	width: 10vw;
	height: 3vw;
	font-size: 2vw;
}

.date2 {
	text-align: center;
	margin-top: 2vw;
}

input {
	width: 15vw;
	height: 1.5vw;
	border-radius: 1vw;
}

.error2 {
	color: red;
	text-align: center;
}

.a2 {
	margin-top: 1vw;
}

.submit2 {
	border-radius: 1vw;
	text-align: center;
	font-size: 1vw;
	height: 3vw;
	width: 8vw;
	background-color: rgb(10, 148, 214);
	text-align: center;
}
</style>