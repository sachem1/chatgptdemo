<template>
	<h1>{{ msg }}</h1>
	<button @click="count++">count is: {{ count }}</button>
	<p>
		Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
	<button @click="handledemo">demo</button>
	<button @click="handleOpenApi">openapi</button>
</template>

<script>
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({
	organization: 'org-wJ3QbwlHup02Yr5Ny2nq9sks',
	apiKey: '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',
})
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			count: 0,
		}
	},
	methods: {
		handledemo() {
			console.log(123)
		},
		async handleOpenApi() {
			console.log('开始请求openapi')
			const openai = new OpenAIApi(configuration)
			const response = await openai.listEngines()
			console.log('response :>> ', response)
		},
	},
}
</script>
