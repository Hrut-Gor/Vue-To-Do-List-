<template lang="">
  <div
    class="bg-[url('./bg-image.jpg')] bg-cover bg-no-repeat min-h-screen bg-fixed bg-center"
  >
    <div class="content-center flex items-center justify-center">
      <h2 class="text-black text-2xl p-2">Signup</h2>
    </div>
    <div class="content-center flex items-center justify-center">
      <form @submit.prevent="signupData">
        <div class="form-control">
          <label for="newUsername">Username: </label>
          <input
            autocomplete="username"
            id="newUsername"
            name="newUsername"
            type="text"
            class="border-[3px] my-[10px] h-10 p-4 border-black"
            v-model="newUser"
          />
        </div>

        <div class="form-control">
          <label for="newPassword">Password: </label>
          <input
            autocomplete="current-password"
            id="newPassword"
            name="newPassword"
            type="password"
            v-model="newPass"
            class="border-[3px] my-[10px] h-10 p-4 border-black"
          />
        </div>

        <div class="form-control">
          <label for="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            v-model="Email"
            class="border-[3px] my-[10px] h-10 p-4 border-black"
          />
        </div>

        <div class="content-center flex item-center justify-center">
          <base-button
            type="submit"
            label="Sign Up"
            class="px-4 py-2"
          ></base-button>

          <!--<div>
          <base-button label="Sign Up" type="submit"></base-button>
        --></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: "",
      newPass: "",
      Email: "",
      userInfo: {
        newUsername: "",
        newPassword: "",
        email: "",
      },
    };
  },

  methods: {
    signupData() {
      this.userInfo.newUsername = this.newUser;
      this.userInfo.newPassword = this.newPass;
      this.userInfo.email = this.Email;

      // Store the data in localStorage
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      
     
      this.$router.push('/login');

      console.log("User information stored successfully!");
    },
  },
};
</script>

