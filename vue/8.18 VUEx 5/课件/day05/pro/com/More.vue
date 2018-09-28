<template>
	<div >
		更多
		<button @click = "changeIndex()">更改初始的值</button>
		{{activeIndex}}
	</div>
</template>

<script>
	export default {
	  computed: {
	    activeIndex: function () {
	      return this.$store.state.activeIndex
	    }
	  },
		methods: {
		  changeIndex () {
		    this.$store.commit('changeIndex');
		  }
		}
	}
</script>

<style>
</style>