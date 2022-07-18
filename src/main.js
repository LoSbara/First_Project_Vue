import { createApp } from 'vue'
import App from './App.vue'
import Basics from './components/Basics.vue'
import Logic from './components/Logic.vue'
import ListInteractive from './components/ListInteractive.vue'
import ListAPI from './components/ListAPI.vue'
import Login from './TaskNote/login/Login.vue'
import Registrazione from './TaskNote/registrazione/Registrazione.vue'
import User from './TaskNote/user/User.vue'
// Load the Vue router
import { createWebHashHistory,createRouter} from 'vue-router'

const routes = [
    { path: '/', component: Basics },
    { path: '/logic', component: Logic },
    { path: '/list', component: ListInteractive },
    { path: '/todos', component: ListAPI },
    { path: '/login', component: Login },
    { path: '/registrazione', component: Registrazione },
    { path: '/user', component: User },
  ]
  
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  }
  )
  


createApp(App).use(router).mount('#app')



