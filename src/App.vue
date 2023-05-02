<template lang="">
  <div>
    <div class="rounded-full border text-2xl font-bold bg-blue-300 text-center mt-[20px] ml-[350px] mr-[350px] border-r-4">Tasks List</div>
     <div class="content-center flex flex-col items-center justify-center"> 
      <input class="border-[3px] mt-[10px]" type="text" placeholder="Enter your task" v-model="task" @keyup.enter="addTask">
      <button class="bg-blue-700 hover:bg-blue-200 rounded px-4 mt-[10px]" @click="addTask">Add Task</button>
     </div>
     <ul>
      <li v-for="(task,index) in tasks" v-bind:key="index">
        <p class="mt-[10px] flex items-center justify-center"><input type="checkbox" :id="task.id" :checked="task.completed" @change="toggleCompleted(task)" >Task: {{ task }}</p>
        <!-- <button class="bg-blue-700 hover:bg-blue-200 rounded px-4 mt-[10px] flex items-center justify-center">Edit Task</button> -->
        <TdPrimaryButton label="Edit Task"/>
        <button class="bg-blue-700 hover:bg-blue-200 rounded px-4 mt-[10px] flex items-center justify-center">Delete Task</button>
        
      </li>
    </ul>
        
  </div>
</template>
<script>
export default {
  data(){
    return{
      task:'',
      tasks:['Learn Vue']
    }
  },

  methods:{
    addTask(){
      if(this.task.length>0){
        this.tasks.push(this.task);
        this.task=''
      }else{
        alert('No task enetered')
      }
      
    },

    deleteTask(){

    },

    toggleTask(task){
      this.task.completed = !this.task.completed
    },

    isTaskCompleted(task){
      return task.completed;
    }
  },


}
</script>
<style>
.completed-task {
  text-decoration: line-through;
}

</style>