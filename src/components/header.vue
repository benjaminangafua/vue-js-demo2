<template>
    <header>
        <h3>{{title}}</h3>
        <Button @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close' : 'Add Task'"
        :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>
<script>
import Button from './Button'
export default {
    name: "Header", 
    // pops:["title"],

    props:{
        title: String,
        showAddTask: Boolean,
    }, 
    components: {
        Button
    },

    // props: {
    //     title:{
    //         type: String,
    //         default: 'Hello, Ben.',
    //     },
    // }

    // setup() {
        
    // },
}
</script>
<style scoped>
header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-block-start: 20px;
}
button{
    color: white;
}
</style>