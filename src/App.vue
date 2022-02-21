<template>
<div class="container card">
<Header @toggle-add-task="toggleAddTask" 
title="Task Tracker"
:showAddTask="showAddTask"/>
<div v-show="showAddTask">
<AddTask @add-task="addTask"/>

</div>
<Tasks 
  @toggle-reminder="toggleReminder"  
  @delete-task="deleteTask"
  :tasks="tasks" 
/>
<router-view></router-view>
<Footer />
</div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/Footer.vue'
  import Tasks from './components/Tasks.vue'
  import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
     Header,
     Footer,
     Tasks,
     AddTask,
  },
   data(){
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods:{
    toggleAddTask(){
      this.showAddTask= !this.showAddTask
    },
    async addTask(tasks){
      const res = await fetch("http://localhost:5000/tasks",{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(tasks)
      })

      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id){
      if(confirm("Are you sure you want to delete?")){
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method : 'DELETE',
      })
      res.status === 200
      ? (this.tasks = this.tasks.filter((task)=>task.id !== id)) 
      : alert('Error deleting task!')
      
      }
      // console.log("task", id)
    },
    async fetchTasks(){
      const res = await fetch('http://localhost:5000/tasks')
      console.log(res)
      const data = await res.json()
      
      return data

    }
    ,
    async toggleReminder(id){

      const taskToggle = await this.fetchTask(id)

      const updTask = {...taskToggle, reminder: !taskToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(updTask)
      }
      )
      const data = await res.json()

      this.tasks = this.tasks.map((task)=>
      task.id === id ? { ...task, reminder: data.reminder}: task
      )
      console.log(id)
    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      console.log(res)
      const data = await res.json()
      
      return data

    }
  },
  async created(){
    console.log(this.fetchTasks())
    this.tasks = await this.fetchTasks()
    // this.tasks=[
    // {
    //   id: 1,
    //   text: 'Doctors Appointment',
    //   day: 'March 1 at 2:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: 'Meeting at school',
    //   day: 'March 3rd at 1:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 3,
    //   text: 'March 3rd at 11:00am',
    //   reminder: false,
    // },
    // ]
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  
  color: #2c3e50;
  /* text-align: calc(); */
  margin-top: 60px;
}

</style>
