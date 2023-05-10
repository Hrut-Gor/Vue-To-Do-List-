import { createRouter, createWebHistory } from 'vue-router';
import TaskView from "./components/task-list/TaskView.vue";
import Login from "./components/auth/LoginPage.vue";
import Signup from "./components/auth/Signup.vue";
const routes = [
  {
    path: '/',
    component: TaskView,
    name: 'task-view',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/signup',
    component: Signup,
    name: 'Signup',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;