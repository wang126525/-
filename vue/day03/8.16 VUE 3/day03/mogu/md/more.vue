
<template>
  <div>
    <ul>
        <li v-for="it in list">{{it.className}}</li>
    </ul>
      

  </div>
</template>

<script>
    import Ajax from "./MyAjax"
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
           var url= 'http://datainfo.duapp.com/shopdata/getclass.php';
           var that=this
            Ajax.fetch(url,function(data){
                    console.log(data)
                    that.list=data

            },function(err){console.log(err)})

           
        }
    }
</script>

<style>

</style>

