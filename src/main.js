import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import registerGlobal from './global'

const app = createApp(App)

registerGlobal(app);
//iconMain(app)
app.component('app', App);
app.mount('#app')
