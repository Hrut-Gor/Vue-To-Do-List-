<template>
  <div class="flex items-center justify-center text-center">
    <div class="text-2xl text-center">Completed Tasks</div><br />
    <div class="flex-col">
    <ul> 
      <li v-for="(completedTask, index) in completedTasks" v-bind:key="index">
        
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showCompleted: false,
            completedTasks: ['task1'],
            completedTask: ''
        }
    },

    methods:{
        addCompTask(){
            this.completedTasks.push(completedTask);
            thcompletedTask
        }
    }
  

};
</script>
