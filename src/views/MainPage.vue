<template>
  <div id="MainPage">
    <div class="logo">
      <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/>
      <span class="my-name"> Gian <strong>Riyanto</strong></span>
    </div>
    <navigation/>
    <personal-links/>
    <div class="introduction">
      <span> Hey {{ inputtedName }}, </span>
      <span>
        I am a software engineering student on the lookout for new learning experiences.
        I love delightful products, thoughtful user-experiences, and creative solutions.
      </span>
    </div>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation";
import PersonalLinks from "../components/PersonalLinks";

export default {
  name: "MainPage",
  components: {
    Navigation,
    PersonalLinks
  },
  props: ['name'],
  data(){
    return {
      inputtedName: this.name,
    }
  },
  watch: {
    name: function () {
      this.inputtedName= this.name
    }
  },
}
</script>

<style lang="scss" scoped>

.logo{
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 27px;
  left: 35px;
  width: 210px;
  .my-portrait{
    width: 70px;
    height: auto
  }
  .my-name{
    padding-left: 16px;
    font-family: "Bw Modelica Regular", serif;
    color: white;
    font-size: 27px;
    line-height: 1.2;
  }
}

#MainPage{
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 100vh;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to bottom left, #8637f8, #4d7fe0);
  box-shadow: 10px 0 20px 2px #9b9b9b;
  .introduction{
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.5;
    font-size: 35px;
    min-width: 200px;
    max-width: 570px;
    font-family: "Bw Modelica Bold", serif;
    color: white;
  }
}

</style>