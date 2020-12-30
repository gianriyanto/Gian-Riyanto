<template>
<div id="Contact">
  <div class="logo-for-mobile"
       @click="selectedTab = 'Introduction';"
       data-aos="fade"
       data-aos-duration="1400"
       data-aos-easing="ease-in-out">
    <span class="circle-border"> <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/></span>
    <span class="my-name"> Gian <span class="last-name"> Riyanto </span></span>
  </div>
  <div class="content">
    <div class="header"
         data-aos="fade"
         data-aos-duration="1500"
         data-aos-easing="ease-in-out">
      Say Hello
    </div>
    <div class="message"
         data-aos="fade"
         data-aos-duration="2300"
         data-aos-easing="ease-in-out">
      Let's keep in touch {{ inputtedName }}! <br/>
      Whether you have a question or you just want to say hi, I'm always up for a chat.
    </div>
    <a class="email-button"
       data-aos="fade"
       data-aos-duration="2300"
       data-aos-easing="ease-in-sine"
       href="mailto:li.griyanto@gmail.com">
      <span class="email-label"> {{ email }} </span>
    </a>
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
      email: 'li.griyanto@gmail.com',
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

#Contact{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 50px;
  text-align: center;
  font-family: "Bw Modelica Bold", serif;

  .logo-for-mobile{
    display: none;
  }

  .header{
    color: white;
    font-size: 85px;
  }

  .message{
    font-family: "Bw Modelica Regular", serif;
    font-size: 16px;
    color: var(--bone);
    width: 400px;
    line-height: 1.5;
    margin: 15px auto 40px auto;
  }

  .email-button{
    color: #e7cf5f;
    cursor: pointer;
    padding: 15px 2vw;
    border: thin solid #e7cf5f;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    transition: all 0.35s ease-in-out;

    .email-label {
      position: relative;
      letter-spacing: 0.5px;
      font-family: "Bw Modelica Regular", serif;
      font-size: 15px;
      color: #e7cf5f;
      z-index: 2;
      margin: auto;
    }

    &:hover {
      color: #fff;
      opacity: 0.7;
    }

  }

  a {
    color: #f5de75;
    text-decoration: none;
    a:visited {
      text-decoration: none;
      color: #f5de75;
    }
  }
}

@media only screen and (max-width: 768px) {
  #Contact{
    height: 85vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;

    .logo-for-mobile{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80vw;
      height: fit-content;
      align-items: center;
      margin-bottom: 6vh;

      .circle-border{
        border: 2px solid white;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        margin: 2vh;

        .my-portrait{
          margin: auto;
          width: 70px;
          height: 70px;
        }
      }
      .my-name{
        font-family: "Bw Modelica Light", serif;
        color: var(--bone);
        font-size: 27px;

        .last-name {
          font-family: "Bw Modelica Regular", serif;
        }
      }
    }

    .content {
      height: fit-content;

      .header {
        display: none;
        color: white;
        font-size: 30px;
      }

      .email-button{
        color: #e7cf5f;
        cursor: pointer;
        padding: 14px 3vw;
        border: thin solid #e7cf5f;
        border-radius: 6px;
        background-color: transparent;
        outline: none;

        .email-label {
          position: relative;
          letter-spacing: 0.5px;
          font-family: "Bw Modelica Regular", serif;
          font-size: 13px;
          color: #e7cf5f;
          z-index: 2;
          margin: auto;
        }
      }

      .message {
        font-family: "Bw Modelica Light", serif;
        font-size: 13px;
        color: var(--bone);
        width: 70vw;
        line-height: 1.9;
      }
    }

    a {
      color: #f5de75;
      text-decoration: none;
      a:visited {
        text-decoration: none;
        color: #f5de75;
      }
    }
  }
}

</style>