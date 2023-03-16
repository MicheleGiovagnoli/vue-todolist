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
            done: false
          };
          this.taskList.push(newtask);
          this.newTask = '';
        },
        removeTask(index) {
            this.taskList.splice(index,1);
        },
        readList(task, index){
            
            if(task.done == false){
                task.done = true;
            }else if (task.done == true){
                task.done = false;
                console.log(index);
            }
            
        }
    }
  }).mount('#app')