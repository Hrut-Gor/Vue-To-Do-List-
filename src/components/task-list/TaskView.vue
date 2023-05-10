<template>
  <div>
    <base-button label="Logout"></base-button>
    <!--Add task-->
    <add-task @addTask="createTask"></add-task>

    <!--clear-task-->
    <div
      v-if="tasks.length > 0"
      class="flex items-center justify-center mt-[10px]"
    >
      <base-button
        label="Clear all tasks"
        @click="cleartasks"
        class="px-4 py-2"
      />
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
                  <base-button label="Save" @click="updateTask(index)" />
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
                  <base-button
                    label="Edit Task"
                    @click="editTask(index)"
                    class="mr-[7.5px]"
                  />
                  <base-button label="Delete Task" @click="deleteTask(task)" />
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
                    <base-button
                      label="Uncomplete"
                      @click="unComplete(index)"
                      class="mr-[7.5px]"
                    />
                  </div>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //mounted() {
  //  const savedTasks = JSON.parse(localStorage.getItem("userInfo"));
  //  if (savedTasks) {
  //    this.tasks = savedTasks;
  //  }
  //},

  created(){
    const data = localStorage.getItem("userInfo");
    console.log(data);
    if(!data){
      this.$router.push('/login');
    }else{
      console.log("User info available");
    }
  },

  data() {
    return {
      tasks: [{ title: "Learn Vue !!", completed: false }],
      editing: null,
      editedTask: "",
      completedTasks: [],
    };
  },

  methods: {
    createTask(task) {
      this.tasks.unshift({ title: task, completed: false });
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

    unComplete(index) {
      const taskName = this.completedTasks[index];

      this.completedTasks.splice(index, 1);

      this.tasks.unshift({ title: taskName, completed: false });
    },

    
  },
};
</script>
