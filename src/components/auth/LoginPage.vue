<template>
  <div class="content-center flex items-center justify-center">
    <h2 class="text-black text-2xl p-2">Login</h2>
  </div>
  <div class="content-center flex items-center justify-center">
    <div class="bg-transparent rounded px-5 py-3">
      <form @submit.prevent="login">
        <div class="form-control">
          <label for="user-name">Username: </label>
          <input
            autocomplete="username"
            id="user-name"
            name="user-name"
            type="text"
            class="border-[3px] my-[10px] h-10 p-4 border-black"
            v-model="username"
          />
        </div>

        <div class="form-control">
          <label for="password">Password: </label>
          <input
            autocomplete="password"
            id="password"
            name="password"
            type="password"
            v-model="password"
            class="border-[3px] my-[10px] h-10 p-4 border-black"
          />
        </div>

        <div class="content-center flex item-center justify-center">
          <base-button
            type="submit"
            label="Login"
            class="px-4 py-2"
          ></base-button>
        </div>
      </form>
    </div>
  </div>
  <div class="content-center flex item-center justify-center">
    <p>
      Don't have an account ? <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {
      const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (
        storedUserInfo &&
        storedUserInfo.newUsername === this.username &&
        storedUserInfo.newPassword === this.password
      ) {
        // User credentials are correct
        this.$router.push("/");
        alert("Login successful!");
      } else {
        // User credentials are incorrect
        alert("Invalid username or password.");
      }

      this.username = "";
      this.password = "";
    },
  },
};
</script>
<!--  
  if (this.compareData) {
    alert("Login successful");
    this.$router.push("/");
  } else {
    alert("Invalid username and password");
  }
  
  getData(){
    const storedData = localStorage.getItem("userInfo");
    if(storedData){
      this.userInfo = JSON.parse(storedData);
    }
    console.log(storedData);
  },
    
  compareData(){
    const user = this.username
    const pass = this.password
    if(user === this.userInfo.newUsername && pass === this.userInfo.newPassword){
      return true
    }else{
      return false
    }
    
-->
