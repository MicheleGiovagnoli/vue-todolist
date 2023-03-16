const { createApp } = Vue

createApp({

    data() {
      return {
        
        taskList: []
      }
    },

    methods: {
        addTask (text){
          const newtask = {
            text: text,
            done: true
          };
          this.taskList.push(newtask);
          this.newTask = '';
        },
        removeTask(index) {
            this.taskList.splice(index,1);
        }
    }
  }).mount('#app')