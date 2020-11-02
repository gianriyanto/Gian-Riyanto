<template>
  <div class="content-wrapper">
    <div id="welcome">
      <div class="container">
        <span class="message"> Hello, I'm <span class="name">Gian.</span> </span>
        <span class="message"> Nice to meet you, </span>
        <inline-text v-bind:nameData="name"/>
      </div>
    </div>
    <MainPage v-bind:name="name.nameInput.slice(0, -1)"/>
  </div>
</template>

<script>
import InlineText from "@/components/InlineText";
import MainPage from "@/views/MainPage";

export default {
  name: "Welcome",
  components: {
    MainPage,
    InlineText
  },
  data() {
    return {
      name: { nameInput: 'Name?', edit: false, isValid: false},
    }
  },
}
</script>

<style lang="scss" scoped>

.content-wrapper {
  display: flex;
  flex-direction: column;
}

#welcome{
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #efefeb;
}
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  line-height: 1.3;
  font-size: 47px;
  width: fit-content;

  .message {
    font-family: "Bw Modelica Bold", serif;
  }

  .name{
    font-family: "Bw Modelica Bold", serif;
    background: linear-gradient(to bottom left, #9226f1, #578cea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

</style>