import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex  from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const store = new Vuex.Store({
    state: {
      name: "hello world",
    },
    mutations: {},
  });
createApp(App).use(router).use(store).mount('#app')

