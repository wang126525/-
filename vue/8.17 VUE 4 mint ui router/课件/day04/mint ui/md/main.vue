<template>
    <div>
        <header class="header">首页</header>
        <div id="content">内容
            <button @click="kind()">Toast</button>
            <button @click="kind1()">iconToast</button>
        </div>
    </div>
</template>


<script>
import Vue from "vue";
import 'mint-ui/lib/style.css'
import VueRouter from "vue-router";
import { Toast } from 'mint-ui';
Vue.use(VueRouter)
    var router=new VueRouter({
   
        }) 
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            kind(){
                console.log(111);
                // router.push("/kind")
                Toast('提示信息');


            },
            kind1(){
                Toast({
                message: '操作成功 &#xe619;',
                iconClass: 'icon icon-success',
                duration: 5000000
                });
                console.log($(".icon-success"))
            }
        },
        mounted(){
            console.log(222)
            console.log($(".icon-success"))
            //  document.getElementsByClassName("icon-success")[0].innerHTML="&#xe682;"
        }
            

    
    }
   
</script>

<style scoped>
    #content{
        display: block;
    }
</style>
