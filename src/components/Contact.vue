<template>
  <div id="Contact"
     data-aos="fade"
     data-aos-duration="1400"
     data-aos-easing="ease-in-out">
  <div class="logo-for-mobile" @click="selectedTab = 'Introduction';">
    <span class="circle-border"> <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/></span>
    <span class="my-name"> Gian <span class="last-name"> Riyanto </span></span>
  </div>
  <div class="content">
    <div class="header"> Hey, let's keep in </div>
    <div class="header"> touch {{ inputtedName }}. </div>
    <div class="message">
      Whether you have a question or just want to say hi, I'm always up for a chat.
    </div>
    <div class="button-container">
      <button class="resume-button">
        <a class="resume-label" :href="`${publicPath}gianriyanto.pdf`" target="_blank"> Take my resume </a>
      </button>
      <button class="email-button">
        <a class="" href="mailto:li.griyanto@gmail.com">
          <span class="email-label"> Email me </span>
        </a>
      </button>
    </div>
  </div>
  <personal-links class="links-for-mobile"/>
</div>
</template>

<script>

import PersonalLinks from "../components/PersonalLinks";

export default {
  name: "Contact",
  components: {
    PersonalLinks,
  },
  props: ['name'],
  data() {
    return {
      inputtedName: this.name,
      publicPath: process.env.BASE_URL
    }
  },
  watch: {
    name: function () {
      this.inputtedName= this.name
    }
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

#Contact{
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;

  .logo-for-mobile{
    display: none;
  }

  .header{
    font-family: "Bw Modelica Bold", serif;
    color: #1f1f1f;;
    font-size: 3vw;
    letter-spacing: -1px;
  }

  .message{
    font-family: "Bw Modelica Light", serif;
    font-size: 16px;
    color: #1f1f1f;;
    width: 400px;
    line-height: 1.7;
    margin: 15px auto 30px auto;
  }

  .button-container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 32vw;
    max-width: 500px;
    margin: 0 auto;

    .resume-button{
      width: 45%;
      background-color: #303030;
      cursor: pointer;
      padding: 16px 2vw;
      border: solid #303030;
      border-radius: 30px;
      outline: none;
      transition: all 0.25s ease-in-out;

      .resume-label {
        position: relative;
        letter-spacing: 0.5px;
        font-family: "Bw Modelica Bold", serif;
        font-size: 14px;
        color: white;
        z-index: 2;
        margin: auto;
      }

      &:hover {
        color: #1f1f1f;;
        opacity: 0.7;
      }
    }
    .email-button{
      color: #1f1f1f;
      width: 44%;
      cursor: pointer;
      padding: 16px 2vw;
      border: thin solid #1f1f1f;
      border-radius: 30px;
      outline: none;
      transition: all 0.25s ease-in-out;
      background-color: transparent;

      .email-label {
        position: relative;
        letter-spacing: 0.5px;
        font-family: "Bw Modelica Bold", serif;
        font-size: 16px;
        color: #1f1f1f;
        z-index: 2;
        margin: auto;
      }

      &:hover {
        opacity: 0.7;
      }
    }

  }

  a {
    color: #1f1f1f;
    text-decoration: none;
    a:visited {
      text-decoration: none;
      color: #1f1f1f;
    }
  }
}

@media only screen and (max-width: 768px) {
  #Contact{
    height: 75vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    text-align: center;

    .logo-for-mobile{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80vw;
      height: fit-content;
      align-items: center;
      margin-bottom: 1vh;

      .circle-border{
        border: 2px solid #1f1f1f;;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin: 2vh;

        .my-portrait{
          margin: auto;
          width: 100%;
          height: 100%;
        }
      }
      .my-name{
        font-family: "Bw Modelica Bold", serif;
        color: #1f1f1f;;
        font-size: 27px;

        .last-name {
          font-family: "Bw Modelica Bold", serif;
        }
      }
    }

    .content {
      height: fit-content;

      .header {
        display: none;
        color: #1f1f1f;
        font-size: 30px;
      }

      .button-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 0 auto;
        width: 90%;

        .resume-button{
          margin-bottom: 14px;
          width: 100%;
          background-color: #303030;
          cursor: pointer;
          padding: 16px 2vw;
          border: solid #303030;
          border-radius: 30px;
          outline: none;
          transition: all 0.25s ease-in-out;

          .resume-label {
            position: relative;
            letter-spacing: 0.5px;
            font-family: "Bw Modelica Bold", serif;
            font-size: 14px;
            color: white;
            z-index: 2;
            margin: auto;
          }
        }
        .email-button{
          color: #1f1f1f;
          width: 100%;
          cursor: pointer;
          padding: 16px 2vw;
          border: thin solid #1f1f1f;
          border-radius: 30px;
          outline: none;
          transition: all 0.25s ease-in-out;
          background-color: transparent;

          .email-label {
            position: relative;
            letter-spacing: 0.5px;
            font-family: "Bw Modelica Bold", serif;
            font-size: 16px;
            color: #1f1f1f;
            z-index: 2;
            margin: auto;
          }
        }
      }

      .message {
        font-family: "Bw Modelica Regular", serif;
        font-size: 15px;
        color: #1f1f1f;
        width: 70vw;
        line-height: 1.9;
      }
    }

    .links-for-mobile{
      width: 100%;
    }

    a {
      color: #1f1f1f;
      text-decoration: none;
      a:visited {
        text-decoration: none;
        color: #1f1f1f;
      }
    }
  }
}

</style>