<template lang="">
  <div>
    
    <div
      class="border text-2xl font-bold bg-blue-300 text-center"
    >
      Tasks List
    </div>
    <div class="content-center flex flex-col items-center justify-center">
      <input
        class="border-[3px] mt-[10px] h-10 p-4"
        type="text"
        placeholder="Enter your task"
        v-model="task"
        @keyup.enter="addTask"
      />
      <TdPrimaryButton label="Add Task" @click="addTask" />
    </div>
    <div class="flex items-center justify-center">
      <ul>
        <li v-for="(task, index) in tasks" v-bind:key="index">
          <section class="bg-gray-300 p-4 mt-[10px] rounded-md">
            <div v-if="editing === index">
              <input
                type="text"
                v-model="editedTask"
                @keyup.enter="updateTask(index)"
              />
              <TdPrimaryButton label="Save" @click="updateTask(index)" />
            </div>
            <div v-else>
              <p for="todo-checkbox" class="to-do-text mt-[10px]">
                <input
                  type="checkbox"
                  class="todo-checkbox"
                  @change="toggleCompleted(task)"
                />Task: {{ task }}
              </p>
          <TdPrimaryButton
          label="Edit Task"
            @click="editTask(index)"
                class="mr-[7.5px]"
              />
              <TdPrimaryButton label="Delete Task" @click="deleteTask(task)" />
            </div>
          </section>
        </li>
      </ul>
    </div>
    <div v-if="tasks.length > 0" class="flex items-center justify-center mt-[10px]">
      <TdPrimaryButton label="Clear all tasks" @click="cleartasks" />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      this.tasks = savedTasks;
    }
  },
  data() {
    return {
      task: "",
      tasks: ["Learn Vue"],
      editing: null,
      editedTask: "",
    };
  },

  methods: {
    addTask() {
      if (this.task.length > 0) {
        this.tasks.unshift(this.task);
        this.task = "";
      } else {
        alert("No task enetered");
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    editTask(index) {
      this.editing = index;
      this.editedTask = this.tasks[index];
    },

    updateTask(index) {
      if (this.editedTask.trim() !== "") {
        this.tasks[index] = this.editedTask;
        this.editedTask = "";
        this.editing = null;
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    cleartasks() {
      localStorage.clear();
      this.tasks = [];
      prompt("Local Storage cleared successful");
    },

    //cancelEdit(){
    //  this.editedTask = "";
    //  this.editing = null;
    //}

    //createInput(){
    //  let inputElement = document.createElement("input");
    //
    //  inputElement.setAttribute("type", "text");
    //  inputElement.setAttribute("placeholder","Enter your task");
    //
    //  let container = document.getElementById("container");
    //  container.appendChild(inputElement);
    //
    //},

    //toggleTask(task){
    //  this.task.completed = !this.task.completed
    //},
  },
};
</script>
