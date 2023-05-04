import PrimaryButton from "./components/buttons/Primary.vue";
import CompletedTask from "./components/CompletedTask.vue";
//import icon from "./components/Icon.vue";
export const register = ( app ) => {
    app.component('TdPrimaryButton', PrimaryButton);
    app.component('CompTask', CompletedTask);
    //app.component('icon', icon);
} 

export default register


