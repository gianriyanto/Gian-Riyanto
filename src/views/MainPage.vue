<template>
  <div id="MainPage">
    <div class="logo"
         @click="selectedTab = 'Introduction';"
         data-aos="fade-up"
         data-aos-duration="1200"
         data-aos-easing="ease-in-out">
      <span class="circle-border"> <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/></span>
      <span class="my-name"> Gian <span class="last-name"> Riyanto </span></span>
    </div>
    <div id="navigation">
      <div class="nav-container">
       <span v-for="tab in tabs"
             class="nav-tabs"
             :key=tab.title
             @click="selectedTab = tab;"
             data-aos="fade-down"
             data-aos-duration=1500
             data-aos-easing="ease-in-out"> {{ tab }}
       </span>
      </div>
      <button class="contact"
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              @click="selectedTab = 'Contact';">
        <span class="contact-label"> Get in Touch </span>
      </button>
    </div>
    <personal-links />
    <component :is="selectedTab" v-bind:name="name"> </component>
    <div class="footer"
         data-aos="fade"
         data-aos-duration="2200"
         data-aos-easing="ease-in-out">
      <span>Designed and developed by Gian Riyanto</span>
      <span>Built with Vue.js and hosted with Netlify</span>
    </div>
  </div>
</template>

<script>

import PersonalLinks from "../components/PersonalLinks";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default {
  name: "MainPage",
  components: {
    PersonalLinks,
    Introduction,
    About,
    Projects,
    Experience,
    Skills,
    Contact
  },
  props: ['name'],
  data(){
    return {
      tabs: ["About", "Projects", "Experience", "Skills"],
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
  width: 280px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;

  .circle-border{
    border: 1.9px solid white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    transition: all .3s ease-in-out;

    &:hover{
      opacity: 0.8;
      transition: color 0.5s;
      border: 2px solid #e2c84b;
      transform: scale(1.1);
    }

    .my-portrait{
      margin: auto;
      width: 70px;
      height: 70px;
      transition: all .3s ease-in-out;
    }
  }
  .my-name{
    font-family: "Bw Modelica Thin", serif;
    color: white;
    font-size: 30px;
    line-height: 1.2;
    transition: all .3s ease-in-out;

    .last-name {
      font-family: "Bw Modelica Regular", serif;
    }

    &:hover{
      opacity: 0.4;
      transition: opacity 0.5s;
      color: #faf441;
      transform: scale(1.1);
    }
  }
}

#MainPage{
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 100vh;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
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
  color: #f1d85b;
}

#navigation {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 42px;
  right: 35px;

  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 480px;

    .nav-tabs {
      font-family: "Bw Modelica Regular", serif;
      font-size: 15px;
      color: white;
      cursor: pointer;

      &:hover{
        opacity: 0.4;
        transition: opacity 0.5s;
      }
    }
  }
  .contact {
    border: thin solid #c8c7c7;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    padding: 16px 20px 16px 20px;
    cursor: pointer;
    position: relative;

    .contact-label {
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