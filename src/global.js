import PrimaryButton from "./components/UI/PrimaryButton.vue";
import Header from "./components/UI/Header.vue";
import AddTask from "./components/task-list/AddTask.vue";
import Login from "./components/auth/LoginPage.vue";
import Signup from "./components/auth/Signup.vue";

export const register = (app) => {
  app.component("base-button", PrimaryButton);
  app.component("main-header", Header);
  app.component("add-task", AddTask);
  //app.component("pending-task", PendingTask);
  app.component("login-page", Login);
  app.component("sign-up", Signup);
};

export default register;
