
<template>
    <div>
        <ul>
            <li v-for = "(it,index) in arr1"><router-link :to="{name:'detail',params:{index:index}}">{{it}}美容</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                arr1:[1,2,3,4,5,6,7]
            }
        }
    }
</script>

<style>

</style>

