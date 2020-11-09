<template>
  <div id="MainPage">
    <div class="logo"
         @click="selectedTab = 'Introduction';"
         data-aos="fade-up"
         data-aos-duration="1400"
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
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              @click="selectedTab = 'Contact';">
        <span class="contact-label"> Get in Touch </span>
      </button>
    </div>
    <personal-links/>
    <div id="desktop">
      <component :is="selectedTab" v-bind:name="name"> </component>
    </div>
    <div id="mobile">
      <div class="mobile-tab_wrapper"> <Introduction v-bind:name="name"/> </div>
      <div class="mobile-tab_wrapper"><About/> </div>
      <div class="mobile-tab_wrapper"><Projects/> </div>
      <div class="mobile-tab_wrapper"><Experience/> </div>
      <div class="mobile-tab_wrapper"><Skills/> </div>
      <div class="mobile-tab_wrapper"><Contact v-bind:name="name"/> <personal-links/> </div>

    </div>
    <div class="footer"
         data-aos="fade"
         data-aos-duration="2200"
         data-aos-easing="ease-in-out">
      <span> Designed and developed by Gian Riyanto </span>
      <span> Built with Vue.js and hosted with Netlify </span>
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
      header: "myName",
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
  justify-content: flex-start;
  top: 27px;
  left: 35px;
  width: 280px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;

  .circle-border{
    border: 2px solid white;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    transition: all .25s ease-in-out;

    &:hover{
      opacity: 0.8;
      transition: all 0.5s;
      border: 2.5px solid #ffe258;
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
    font-family: "Bw Modelica Light", serif;
    color: white;
    font-size: 30px;
    transition: all .3s ease-in-out;
    padding-left: 20px;

    .last-name {
      font-family: "Bw Modelica Regular", serif;
    }

    &:hover{
      opacity: 0.7;
      transition: opacity 0.5s;
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
  overflow: hidden;
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
      background: linear-gradient(to bottom left, #8f27f6, #5658e2);
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

.footer{
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: right;
  bottom: 26px;
  right: 40px;
  font-family: "Bw Modelica Hairline", serif;
  font-size: 13px;
  line-height: 1.8;
  color: #d4d3cd;
}

#desktop{
  margin: auto;
}

#mobile{
  display: none;
}

@media only screen and (max-width: 768px) {

  #MainPage{
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
    background-image: var(--gradient-mobile);
    box-shadow: 10px 0 20px 2px #9b9b9b;
  }
  .logo{
    display: none;
    flex-direction: row;
    width: 80vw;
    height: 20vw;

    .circle-border {
      border: 2px solid white;
      border-radius: 50%;
      width: 55px;
      height: 55px;

      .my-portrait {
        margin: auto;
        width: 55px;
        height: 55px;
      }
    }
    .my-name{
      font-family: "Bw Modelica Light", serif;
      color: white;
      font-size: 24px;
      padding-left: 20px;

      .last-name {
        font-family: "Bw Modelica Regular", serif;
      }
    }
  }

  #navigation {
    display: none;
    width: 80vw;
    margin: 80px auto 0 auto;

    .nav-container {

      .nav-tabs {
        font-family: "Bw Modelica Regular", serif;
        font-size: 15px;
        color: white;
      }
    }
    .contact {
      display: none;
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
        background: linear-gradient(to bottom left, #8f27f6, #5658e2);
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

  .footer{
    display: none;
  }

  #desktop{
    display:none;
  }
  #mobile{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    height: fit-content;

    .mobile-tab_wrapper{
      margin: 4vh auto 7vh auto;
      height: fit-content;
      width: 100vw;
    }
  }
}

</style>