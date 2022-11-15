import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

