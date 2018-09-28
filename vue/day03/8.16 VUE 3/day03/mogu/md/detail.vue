
<template>
  <div>

      详情{{$route.params.index}}
      <button @click="back()">返回</button>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        mounted(){
            console.log(this.$route.params.index)
        },
        methods:{
            back(){
                window.history.go(-1)
            }
        }
    }
</script>

<style>

</style>

