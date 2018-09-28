
<template>
  <div class="container">
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>


<script>
    import Mainfooter from "./mainfooter.vue"
    export default {
        data(){
            return {

            }
        },
        components:{
            "v-footer":Mainfooter
        }
    }
</script>
