<template>
  <div class="hello">
    {{newMsg}}---{{newNum}}
    <ul>
    	<li v-for = "item in classList">
    	  {{item.className}}
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    newMsg: function () {
      this.msg = this.$store.state.msg
      return this.$store.state.msg
    },
    newNum: function () {
      return this.$store.state.num
    },
    classList: function () {
      return this.$store.state.classList
    }
  },
  watch: {
    $store: function (newVal) {
      console.log(newVal)
    }
  },
  mounted () {
    this.$store.commit('getClassList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
