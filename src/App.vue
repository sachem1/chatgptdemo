<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<h1>小翼客服AI</h1>
	<!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
	<Answer msg="" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Answer from './components/answer.vue'
export default {
	name: 'App',
	components: {
		HelloWorld,
		Answer,
	},
}
</script>
