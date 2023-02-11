<template>
  <h1>{{ msg }}</h1>
  <p>
    <input
      style="width: 690px; height: 30px"
      v-model="question"
      placeholder="请输入您想咨询的问题"
    />
  </p>
  <p>
    <button style="width: 120px; height: 40px" @click="handleOpenApi">
      GO
    </button>
  </p>
  <p>
    <textarea
      style="width: 690px; height: 200px"
      cols="100"
      rows="4"
      v-model="answer"
      placeholder="...."
      disabled
    ></textarea>
  </p>
</template>

<script>
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-RvdmUJNYIZqFJIWu7jV9gXkW",
  apiKey: "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",
});
import { openLoading, closeLoading } from "./loading";
export default {
  name: "AI 回答",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      question: "",
      answer: "",
      totalQuestion: "",
    };
  },
  methods: {
    handledemo() {
      console.log(123);
    },
    async handleOpenApi() {
      console.log("开始请求openapi");
      try {
        openLoading();
        //Loading.service(options);
        const openai = new OpenAIApi(configuration);
        var response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: "Q: " + this.question + "\nA:",
          //prompt: this.question,
          temperature: 0,
          max_tokens: 1000,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
        console.log("response :>> ", response);
        closeLoading();
        this.answer = response.data.choices[0].text;
        this.totalQuestion = this.question + this.answer;
      } catch (error) {
        this.answer = "网络中断，请重试...";
        console.log("error :>> ", error);
        closeLoading();
      }
    },
    async handleOpenApi2() {
      console.log("开始请求openapi");

      const openai = new OpenAIApi(configuration);
      var response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: this.totalQuestion,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      console.log("response :>> ", response);
      this.answer = response.data.choices[0].text;
      this.totalQuestion = "";
    },
  },
};
</script>
