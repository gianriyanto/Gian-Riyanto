<template>
  <div id="MainPage">
    <div class="header">
      <div class="logo"
           @click="selectedTab='Introduction'">
        <span class="circle-border"> <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/></span>
        <span class="my-name"> Gian <span class="last-name"> Riyanto </span></span>
      </div>
      <div id="navigation">
        <div class="nav-container">
       <span v-for="tab in tabs"
             class="nav-tabs"
             :key=tab.title
             @click="selectedTab = tab;">
         {{ tab }}
       </span>
        </div>
        <button class="contact" @click="selectedTab = 'Contact';">
          <span class="contact-label"> Get in Touch </span>
        </button>
      </div>
    </div>
    <div id="desktop">
      <component :is="selectedTab" v-bind:name="name"> </component>
    </div>
    <div id="mobile">
      <div class="mobile-tab_wrapper"><Introduction v-bind:name="name"/></div>
      <div class="mobile-tab_wrapper"><About/> </div>
      <div class="mobile-tab_wrapper"><Experience/> </div>
      <div class="mobile-tab_wrapper"><Projects/> </div>
      <div class="mobile-tab_wrapper"><Skills/> </div>
      <div class="mobile-tab_wrapper">
        <Contact v-bind:name="name"/>
      </div>
    </div>
    <div class="footer"
         data-aos="fade"
         data-aos-duration="2200"
         data-aos-easing="ease-in-out">
      <div class="personal-links"> <personal-links/> </div>
    </div>
    <a class="email" href="mailto:li.griyanto@gmail.com">
      <font-awesome-icon class="email-icon" :icon="['fa', 'envelope']"/>
    </a>
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
  min-width: 100vw;
  z-index: 2;
  background: rgba(221, 221, 206, 0);
  backdrop-filter: blur(40.0px);
  -webkit-backdrop-filter: blur(40.0px);
  overflow-x: hidden;

  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 0 0 0;
    height: 100px;

    .logo{
      padding-left: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 280px;
      cursor: pointer;
      opacity: 1;
      transition: 0.25s;

      .circle-border{
        border: 2px solid #1f1f1f;
        border-radius: 50%;
        width: 58px;
        height: 58px;
        transition: all .25s ease-in-out;

        &:hover{
          opacity: 0.7;
          transition: all 0.25s;
        }

        .my-portrait{
          margin: auto;
          width: 100%;
          height: 100%;
          transition: all .3s ease-in-out;
        }
      }
      .my-name{
        font-family: "Bw Modelica Regular", serif;
        color: #1f1f1f;
        font-size: 25px;
        transition: all .3s ease-in-out;
        padding-left: 20px;

        .last-name {
          font-family: "Bw Modelica Bold", serif;
        }

        &:hover{
          opacity: 0.7;
        }
      }
    }

    #navigation {
      padding-right: 30px;
      display: flex;
      flex-direction: row;
      align-self: center;

      .nav-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 28vw;
        min-width: 400px;
        margin-right: 30px;

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
        border-radius: 6px;
        background-color: transparent;
        outline: none;
        padding: 13px 20px;
        cursor: pointer;
        position: relative;
        height: 50px;

        .contact-label {
          position: relative;
          font-family: "Bw Modelica Regular", serif;
          font-size: 14px;
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
    cursor: pointer;

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
    position: absolute;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100vw;
    background: rgba(221, 221, 206, 0);
    backdrop-filter: blur(40.0px);
    -webkit-backdrop-filter: blur(40.0px);
    overflow-y: scroll;

    .header{
      display: none;
    }
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
        margin: 4vh auto 5vh auto;
        height: fit-content;
        width: 100vw;
      }
    }
  }
}

</style>