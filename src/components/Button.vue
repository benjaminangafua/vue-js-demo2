<template>
    <button @click="onclick()" :style="{background: color}" class="btn">
        {{text}}
    </button>
</template>
<script>

export default {
    name: "Button",
    props: {
        text: String,
        color: String
    },
    methods:{
        onclick(){
            this.$emit("btn-click")
            console.log("Click")
        }
    }
}
</script>
