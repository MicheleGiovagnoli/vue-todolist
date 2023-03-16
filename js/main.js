const { createApp } = Vue

createApp({

    data() {
      return {
        newTask: '',
        taskList: []
      }
    },

    methods: {
        addTask (){
          const newtask = {
            text: this.newTask,
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