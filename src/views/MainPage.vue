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
    <div id="desktop">
      <component :is="selectedTab" v-bind:name="name"> </component>
    </div>
    <div id="mobile">
      <div class="mobile-tab_wrapper"><Introduction v-bind:name="name"/></div>
      <div class="mobile-tab_wrapper"><About/> </div>
      <div class="mobile-tab_wrapper"><Projects/> </div>
      <div class="mobile-tab_wrapper"><Experience/> </div>
      <div class="mobile-tab_wrapper"><Skills/> </div>
      <div class="mobile-tab_wrapper">
        <Contact v-bind:name="name"/>
      </div>
    </div>
    <div class="footer"
         data-aos="fade"
         data-aos-duration="2200"
         data-aos-easing="ease-in-out">
      <div class="personal-links">
        <personal-links/>
      </div>
    </div>
    <div class="email" href="mailto:li.griyanto@gmail.com">
      <font-awesome-icon class="email-icon" :icon="['fa', 'envelope']"/>
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
      email: 'li.griyanto@gmail.com',
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
  background: rgba(221, 221, 206, 0);
  backdrop-filter: blur(40.0px);
  -webkit-backdrop-filter: blur(40.0px);
  overflow: hidden;

  .logo{
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    top: 30px;
    left: 37px;
    width: 280px;
    cursor: pointer;
    opacity: 1;
    transition: 0.25s;

    .circle-border{
      border: 2px solid white;
      border-radius: 50%;
      width: 65px;
      height: 65px;
      transition: all .25s ease-in-out;

      &:hover{
        opacity: 0.7;
        transition: all 0.25s;
      }

      .my-portrait{
        margin: auto;
        width: 65px;
        height: 65px;
        transition: all .3s ease-in-out;
      }
    }
    .my-name{
      font-family: "Bw Modelica Regular", serif;
      color: #1f1f1f;
      font-size: 25px;
      transition: all .3s ease-in-out;
      padding-left: 20px;
      padding-top: 3px;

      .last-name {
        font-family: "Bw Modelica Bold", serif;
      }

      &:hover{
        opacity: 0.7;
      }
    }
  }
  #navigation {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 45px;
    right: 40px;

    .nav-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 30vw;
      min-width: 370px;
      margin-right: 15px;

      .nav-tabs {
        font-family: "Bw Modelica Regular", serif;
        font-size: 15px;
        color: #1f1f1f;
        cursor: pointer;
        padding: 15px 25px;
        border-radius: 8px;
        transition: all 0.35s;

        &:hover{
          opacity: 0.4;
          background-color: #e0e0e0;
        }
      }
    }
    .contact {
      border: thin solid #565656;
      border-radius: 8px;
      background-color: transparent;
      outline: none;
      padding: 15px 25px;
      cursor: pointer;
      position: relative;

      .contact-label {
        position: relative;
        font-family: "Bw Modelica Regular", serif;
        font-size: 13px;
        color: #1f1f1f;
        z-index: 2;
      }
      &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(to bottom left, #d7d7d7, #e2e2e2);
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
    bottom: 29px;
    right: 40px;
    font-family: "Bw Modelica Hairline", serif;
    font-size: 14px;
    line-height: 1.8;
    color: #d4d3cd;
  }

  .email{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:auto;
    padding: 0;
    bottom: 29px;
    right: 40px;
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: linear-gradient(#1d1d1d, #393939);
    box-shadow: 0 12px 30px 0 rgba(100, 93, 150, 0.5);

    .email-icon{
      margin: auto;
      color: white;
      font-size: 30px;
    }
  }

  #desktop{
    margin: auto;
  }

  #mobile{
    display: none;
  }
}

@media only screen and (max-width: 768px) {

  #MainPage{
    margin-top: 150vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
    background-image: var(--gradient);
    box-shadow: 10px 0 20px 2px #d4d4d4;
    overflow-y: scroll;

    .logo{
      display: none;
    }
    .footer{
      display: none;
    }
    .email{
      display: none;
    }

    .personal-links{
      display: none;
    }

    #navigation {
      display: none;

      .contact {
        display: none;
      }
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
        margin: 4vh auto 10vh auto;
        height: fit-content;
        width: 100vw;
      }
    }
  }
}

</style>