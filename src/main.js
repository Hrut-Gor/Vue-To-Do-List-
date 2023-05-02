import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AddTask from './components/AddTask.vue'
import registerGlobal from './global'

const app = createApp(App)

registerGlobal(app);
app.component('add-task', AddTask);
app.component('app', App);
app.mount('#app')
