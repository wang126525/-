
<template>
 <div> 首页{{this.word}}
     <v-home :msg="msg" :name="name" ref="child" @to-prind="getdata">
         <div slot="111">我的</div>
         <div slot="222">我的2</div>
     </v-home>
    
 </div>
</template>

<script>
    import Home1 from "./home.1.vue"
    export default{
        data(){
            return{
                msg:"你好孩子，给你数据" ,
                name:"小黄",
                word:""
            }
        },
        components:{
            "v-home":Home1
        },
        methods:{
            getdata(nam){
                console.log(nam);
                console.log(this.$refs.child.name1)
                this.word=this.$refs.child.name1
            }
        }
    }
</script>

<style>

</style>

