<template>
  <div id="MainPage">
    <div class="logo" @click="selectedTab = 'Introduction';">
      <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/>
      <span class="my-name"> Gian <strong> Riyanto </strong></span>
    </div>
    <div id="navigation">
      <div class="nav-container">
       <span v-for="tab in tabs" class="nav-links" :key="tab" @click="selectedTab = tab;"> {{ tab }} </span>
      </div>
      <button class="email">
        <span class="email-label"> Get in Touch </span>
      </button>
    </div>
    <personal-links/>
    <component :is="selectedTab" v-bind:name="name"> </component>
    <div class="footer">
      <span>Designed and developed by Gian Riyanto</span>
      <span>Built with Vue.js and hosted with Netlify</span>
    </div>
  </div>
</template>

<script>

import PersonalLinks from "../components/PersonalLinks";
import Introduction from "../components/Introduction";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default {
  name: "MainPage",
  components: {
    PersonalLinks,
    Introduction,
    Education,
    Projects,
    Experience,
    Skills,
  },
  props: ['name'],
  data(){
    return {
      tabs: ["Education", "Projects", "Experience", "Skills"],
      selectedTab: "Introduction",
      inputtedName: this.name,
    }
  },
  watch: {
    name: function () {
      this.inputtedName = this.name
    },
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
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;

  &:hover{
    opacity: 0.6;
  }
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
  background-image: var(--gradient);
  box-shadow: 10px 0 20px 2px #9b9b9b;
}

.footer{
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: right;
  bottom: 26px;
  right: 40px;
  font-family: "Bw Modelica Light", serif;
  font-size: 13px;
  line-height: 1.8;
  color: #c8c7c7;
}

#navigation {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 30px;
  right: 35px;

  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 450px;
    .nav-links {
      font-family: "Bw Modelica Regular", serif;
      font-size: 14px;
      color: white;
      cursor: pointer;
      &:hover{
        opacity: 0.7;
      }
    }
  }
  .email {
    border: thin solid #c8c7c7;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    padding: 16px 20px 16px 20px;
    cursor: pointer;
    position: relative;

    .email-label {
      position: relative;
      font-family: "Bw Modelica Regular", serif;
      font-size: 14px;
      color: white;
      z-index: 2;
    }
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(to bottom left, #8744ec, #7965ea);
      border-radius: 6px;
      transition: all 0.35s;
    }
    &:hover {
      color: #fff;
      opacity: 1;
    }
    &:hover:after {
      width: 100%;
    }
  }
}

</style>