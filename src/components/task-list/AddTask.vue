<template>
  <div class="content-center flex items-center justify-center">
    <input
      class="border-[3px] my-[10px] h-10 p-4 border-black"
      type="text"
      placeholder="Enter your task"
      v-model="task"
      @keyup.enter="addTask"
    />
  </div>

  <div class="content-center flex items-center justify-center">
    <base-button
      label="Add Task"
      @click="addTask"
      class="px-4 py-2"
    ></base-button>
  </div>
</template>

<script>
export default {
  emits: ["addTask"],
  data() {
    return {
      task: "",
    };
  },

  methods: {
    addTask(task) {
      if (this.task.trim() !== "") {
        this.$emit("addTask", this.task);
        this.task = "";
      } else {
        alert("No task entered");
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>
