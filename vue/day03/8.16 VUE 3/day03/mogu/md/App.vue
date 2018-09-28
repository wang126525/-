

<template>
  <div class="container">
    <header class="header">头部 </header>
    <div id="content" >
       
        <router-view></router-view>
    </div>
    <footer class="footer">
        <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/kind">分类</router-link></li>
            <li><router-link to="/cart">购物车</router-link></li>
            <li><router-link to="/user">个人中心</router-link></li>
            <li><router-link to="/more">更多</router-link></li>
        </ul>
    </footer>
  </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .router-link-exact-active.router-link-active{
        color:#f66;
    }
</style>