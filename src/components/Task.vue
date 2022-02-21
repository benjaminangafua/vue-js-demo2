
<template>
 <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder? 'reminder' : '']">
     <h3>{{task.text}}
         <i @click="$emit('delete-task',task.id)" class="fas fa-times"></i>
         <!-- &times; -->
     </h3>
    <p>{{task.day }}</p>
 </div>
</template>
<script>

export default {
    name : "Task",
    props: {
        task: Object
    },
    // methods:{
    //     onDelete(id){
    //         this.$emit('delete-task', id)
    //         // console.log(id)
    //     }
    // }
}
</script>
<style scoped>
.fas {
    color: red;
}
div {
    background-color: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
div.reminder {
    border-left: 5px solid green;
}
div h3 { 
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>