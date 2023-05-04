<template lang="">
  <div
    class="bg-[url('./bg-image.jpg')] bg-cover bg-no-repeat min-h-screen bg-fixed bg-center"
  >
    <div
      class="font-bold bg-black text-center text-white text-[60px] bg-opacity-40"
    >
      TaskTrek
    </div>
    <!--Add task-->
    <div class="content-center flex items-center justify-center">
      <input
        class="border-[3px] my-[10px] h-10 p-4 border-black"
        type="text"
        placeholder="Enter your task"
        v-model="task"
        @keyup.enter="addTask"
      />
    </div>
    <div class="text-center">
      <TdPrimaryButton label="Add Task" class="px-4 py-2" @click="addTask" />
    </div>

    <!--Task list-->
    <div class="m-2 grid grid-cols-2">
      <!--Left panel-->
      <div class="mt-[15px]">
        <div
          class="text-2xl text-center text-black bg-white bg-opacity-50 p-4 rounded-full mx-[120px]"
        >
          Pending Tasks
        </div>
        <br />
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
                  <p class="mt-[10px]">
                    <input
                      type="checkbox"
                      v-model="task.completed"
                      @change="addCompletedTask(task)"
                    />
                    {{ task.title }}
                  </p>
                  <TdPrimaryButton
                    label="Edit Task"
                    @click="editTask(index)"
                    class="mr-[7.5px]"
                  />
                  <TdPrimaryButton
                    label="Delete Task"
                    @click="deleteTask(task)"
                  />
                </div>
              </section>
            </li>
          </ul>
        </div>
      </div>
      <!-- right panel -->
      <div class="text-center text-2xl text-black mt-[15px]">
        <h2 class="bg-green-400 bg-opacity-50 p-4 rounded-full mx-[120px]">
          Completed Tasks
        </h2>
        <div>
          <br />
          <div class="flex items-center justify-center text-center text-black">
            <ul>
              <li v-for="(task, index) in completedTasks" v-bind:key="index">
                <section class="bg-gray-300 p-4 mt-[10px] rounded-md">
                  
                  <div>{{ completedTasks[index] }}</div>
                  <div>
                    <TdPrimaryButton
                      label="Uncomplete"
                      @click="unComplete(index)"
                      class="mr-[7.5px]"
                    />
                  </div>
                </section>

                <!--<section class="bg-gray-300 p-4 mt-[10px] rounded-md">
                <p>{{ completedTasks[index] }}</p>
                <TdPrimaryButton label="Uncomplete" @click="unComplete(task)"></TdPrimaryButton>
              </section>-->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--clear-task-->
    <div
      v-if="tasks.length > 0"
      class="flex items-center justify-center mt-[10px]"
    >
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
      tasks: [{ title: "Learn Vue", completed: false }],
      editing: null,
      editedTask: "",
      completedTasks: [],
    };
  },

  methods: {
    addTask() {
      if (this.task.length > 0) {
        this.tasks.unshift({ title: this.task, completed: false });
        this.task = "";
      } else {
        alert("No task enetered");
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        var delConfirm = confirm("Do you want to delete " + task.title + " ?");
        if (delConfirm === true) {
          this.tasks.splice(index, 1);
        } else {
          alert(task.title + " will not be deleted");
        }
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    editTask(index) {
      this.editing = index;
      this.editedTask = this.tasks[index].title;
    },

    updateTask(index) {
      if (this.editedTask.trim() !== "") {
        this.tasks[index].title = this.editedTask;
        this.editedTask = "";
        this.editing = null;
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    cleartasks() {
      var confirmation = confirm("Local Storage cleared successful");
      console.log(confirmation);
      if (confirmation === true) {
        localStorage.clear();
        this.tasks = [];
      } else {
        alert("Clear task aborded");
      }
    },

    addCompletedTask(task) {
      if (task.completed) {
        this.completedTasks.unshift(task.title);
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }

      localStorage.setItem(
        "completedTasks",
        JSON.stringify(this.completedTask)
      );
    },

    unComplete(task) {
      const index = this.completedTasks.indexOf(task);
      if (index !== -1) {
        this.tasks.unshift({
          title: this.completedTasks[index],
          completed: false,
        });
      }
      this.completedTasks.splice(this.completedTasks[index], 1);
    },
  },
};
</script>
