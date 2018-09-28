<template>
    <div  class="flex">
      <div id="addcontent">
           <div class="wo"> 
           	<ul>
           		<li v-for="it in add1">
           			<div class="left">
           				<p>{{it.name}}</p>
           				<p>{{it.di}}</p>
           			</div>
           			<div class="phone">
           				{{it.phone}}
           			</div>
           			
           		</li>
           	</ul>
           </div>
            <div class="dizhi">
                <router-link to="add2">+新地址</router-link>
                </div>
      </div>
    </div>
</template>

<script>
import "./../scss/add.scss"
export default {
        data(){
            return {
                add:"luoyang",
               
                add1:[]
            }
        },
        mounted(){
        	if(localStorage.getItem("add")){
        		var add=JSON.parse(localStorage.getItem("add"))
	        	console.log(add);
	        	this.add1=add
        	}else{
        		
        	}
        }
}
</script>

<style>

</style>
