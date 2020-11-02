<template>
  <div id="MainPage">
    <div class="logo">
      <span> Gian </span>
      <span> Riyanto </span>
    </div>
    <navigation/>
    <personal-links/>
    <div class="introduction">
      <span> Hey {{ inputtedName }}, </span>
      <span> I am a graduating software engineering student on the lookout for new learning experiences. I love delightful products, thoughtful user-experiences, and creative solutions.</span>
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
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 22px;
  left: 30px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  color: #efefeb;
  font-size: 27px;
  line-height: 1.2;
}

#MainPage{
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 100vh;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to bottom left, #8b3bff, #4d7bd7);
  box-shadow: 10px 0 20px 2px #9b9b9b;
  .introduction{
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.5;
    font-size: 29px;
    width: fit-content;
    max-width: 45%;
    font-family: "Bw Modelica Bold", serif;
    color: white;
  }
}

</style>