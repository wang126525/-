<template>
  <div >
    <img src = "./assets/logo.png">
    {{msg}}
    <button @click = "test()">测试</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      msg: 'test'
    }
  },
  methods: {
    test: function () {
      var a = 1
      console.log(a)
      console.log(this.$store.state.msg)
      this.$store.commit('increment')
      console.log(this.$store.state.msg)
    }
  }
}
</script>

<style>

</style>
