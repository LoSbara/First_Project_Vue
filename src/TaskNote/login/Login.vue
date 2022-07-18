<template>
    <title>Login</title>
    <div class="body1">
        <div class="container1">
            <h1 class="h11">Welcome in Login</h1>
            <form action='LoginServlet' method='POST'>
                <b v-if="message==null" class="error1">{{message=""}}</b>
                <div class="rowContainer1">
                    <div class="column1">
                        <div class="row11">
                            <div class="text1">Email:</div>
                            <div class="text1">Password:</div>
                        </div>
                        <div class="row11">
                            <div class="textInput1">
                                <input v-model="currentEmail" type='text' name='email'>
                            </div>
                            <div class="textInput1">
                                <input v-model="currentPassword" type='password' name='password'>
                            </div>
                        </div>
                    </div>
                    <div class="row21">
                        <div>
                            <input class="submit1" type='button' value='Login' @click="login()">
                        </div>
                        <div class="a1">
                            <router-link to="/registrazione">Registration</router-link>
                        </div>
                    </div>
                </div>
                <div class="date1">{{date}}</div>
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
	async login() {
		let logUser={ 
			email: this.currentEmail, 
			password: this.currentPassword
		};
		console.log(logUser);
		this.message = "";
		try {
			let item= await axios.post("http://localhost:8080/user/login",logUser);
			console.log(item);
			this.$router.push('/user')
			console.log(item.data.id)
			localStorage.idUser=item.data.id;
		} catch (Error) {
			this.message = "Email o password errate";
		}
    }
  }
}
</script>

<style>
.container1 {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.h11 {
	align-items: center;
	text-align: center;
}

.rowContainer1 {
	border: 1px solid black;
	border-radius: 2vw;
	background-color: rgb(210, 210, 210);
}

.column1 {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
}

.row11 {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 1vw;
	width: 24vw;
}

.row21 {
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 1vw;
}

.text1 {
	text-align: right;
	width: 18vw;
	height: 6vw;
	font-size: 3vw;
}

.textInput1 {
	text-align: left;
	width: 24vw;
	height: 6vw;
	font-size: 3vw;
}

.date1 {
	width: 48vw;
	height: 3vw;
	text-align: center;
	margin-top: 2vw;
}

input {
	width: 22vw;
	height: 2vw;
	border-radius: 1vw;
}

.error1 {
	color: red;
	text-align: center;
}

.a1 {
	margin-top: 1vw;
}

.submit1 {
	border-radius: 1vw;
	text-align: center;
	font-size: 3vw;
	height: 6vw;
	width: 10vw;
	background-color: rgb(10, 148, 214);
	text-align: center;
}
</style>