<template>
    <div  class="flex">
      <div id="add2content">
           
            <div class="xinxi">
                <input type="text" v-model="ren" class="put" placeholder="收货人姓名"/>
                <input type="text" v-model="shou" class="put" placeholder="手机号"/>
                <input type="text" v-model="you" class="put" placeholder="邮编（必填）"/>
                <input type="text" v-model="di" class="put" placeholder="地址（请填写详细地址）"/>
                <div class="put1">
                    <input type="checkbox" v-model="xuan"/>&nbsp;设为默认地址
                </div>
                <div class="dian">
                    <div class="bao"@click="bao()">保存并返回</div>
                    <div class="fan" @click="back()">返回</div>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import "./../scss/add2.scss"
import { Toast } from 'mint-ui';
export default {
        data(){
            return {
                xuan:true,
                ren:"",
                shou:"",
                you:"",
                di:""
            }
        },
        methods:{
            back(){
                window.history.go(-1);
            },
            bao(){
                if(this.ren==""||this.shou==""||this.you==""||this.you==""){
                    Toast('信息填写不完整');
                }else{
                   var add ={name:this.ren,phone:this.shou,you:this.you,di:this.di,mo:this.xuan}
                   var arr =JSON.parse(localStorage.getItem("add"))
                   if(!arr || arr.length==0){
						var arr1=[];
						arr1.push(add);
						localStorage.setItem("add",JSON.stringify(arr1))
						 window.history.go(-1)
                   }else{
                       console.log(arr,"123")
                       var a=0;
                   	for(var it in arr){
                   		console.log(it,"123")
                   		if(add.di==arr[it].di){
                               console.log("333")
                               var a=1
                           Toast('地址已经填写');
                               
                   		}
                               
                        if(a==0){
                         console.log(111111)
                         if(this.xuan){
                         	arr.unshift(add);
                         	 
                         }else{
                         	arr.push(add);
                         }
                   		   
                               localStorage.setItem("add",JSON.stringify(arr))
                                window.history.go(-1)
                         } 
                   		
                   	}
                   }
                //    console.log(add)
                   
                }
                
            }
        }
}
</script>

<style>

</style>
