<template>
  <div class="content-wrapper">
    <div id="welcome">
      <div class="welcome-container">
        <span class="title"> Hello, I'm <span class="name">Gian.</span> </span>
        <span class="subtitle"> Nice to meet you, </span>
        <inline-text v-bind:nameData="name"/>
      </div>
    </div>
    <IntroPage v-bind:name="name.nameInput.slice(0, -1)"/>
  </div>
</template>

<script>
import InlineText from "@/components/InlineText";
import IntroPage from "@/views/Introduction";


export default {
  name: "Welcome",
  components: {
    InlineText,
    IntroPage,
  },
  data() {
    return {
      name: { nameInput: 'Name?', edit: false, isValid: false},
    }
  },
}
</script>

<style scoped>

.content-wrapper {
  display: flex;
  flex-direction: column;
}

  #welcome{
    display: flex;
    flex-direction: column;
    position: sticky;
    height: 100vh;
    width: 100%;
  }
  .welcome-container{
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.3;
    font-size: 47px;
    width: fit-content;
  }
  .title{
    font-family: "Bw Modelica Regular", serif;
  }
  .name{
    font-family: "Bw Modelica Bold", serif;
    background: linear-gradient(to bottom left, #9226f1, #578cea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle{
    font-family: "Bw Modelica Regular", serif;
  }

</style>