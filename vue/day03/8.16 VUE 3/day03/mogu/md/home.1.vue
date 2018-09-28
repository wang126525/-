
<template>
 <div> 我是home的子模块
     {{msg}}
     <h1>{{name}}</h1>
     <slot name="111">11111</slot>
     <button @click="send()">传值给父元素</button>
     <slot name="222"></slot>
 </div>
</template>

<script>
    export default{
        props:[ "name","msg"]
           
        ,
        data(){
            return{
                name1:"小路"
            }
        },
        methods:{
            send(){
                this.$emit("to-prind",this.name1)
            }
        }
    }
</script>

<style>

</style>

