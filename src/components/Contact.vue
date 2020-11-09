<template>
<div id="Contact">
  <div class="logo-for-mobile"
       @click="selectedTab = 'Introduction';"
       data-aos="fade-up"
       data-aos-duration="1400"
       data-aos-easing="ease-in-out">
    <span class="circle-border"> <img class="my-portrait" src="@/assets/myPortrait.png" alt=""/></span>
    <span class="my-name"> Gian <span class="last-name"> Riyanto </span></span>
  </div>
  <div class="content">
    <div class="header"
         data-aos="fade-up"
         data-aos-duration="2500"
         data-aos-easing="ease-in-out">
      Say Hello
    </div>
    <div class="email">
      <a href="mailto:li.griyanto@gmail.com"
         data-aos="fade-up"
         data-aos-duration="3000"
         data-aos-easing="ease-in-out">li.griyanto@gmail.com</a>
    </div>
    <div class="message"
         data-aos="fade-up"
         data-aos-duration="2000"
         data-aos-easing="ease-in-out">
      Let's keep in touch {{ inputtedName }}! <br/>
      I'm one inbox away, whether you have a question or you just want to say hi, I'm always up for a chat.
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
    margin-bottom: 20px;
  }

  .message{
    font-family: "Bw Modelica Light", serif;
    font-size: 18px;
    color: var(--bone);
    width: 500px;
    line-height: 1.5;
  }

  .email{
    color: #e7cf5f;
    font-size: 40px;
    margin-bottom: 30px;
    transition: all .2s ease-in-out;

    &:hover {
      opacity: 0.8;
      transition: 0.2s;
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
    height: 90vh;
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
      margin-bottom: 7vh;

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
        color: white;
        font-size: 30px;

        .last-name {
          font-family: "Bw Modelica Regular", serif;
        }
      }
    }

    .content {
      height: fit-content;

      .header {
        color: white;
        font-size: 30px;
      }

      .email {
        text-align: center;
        color: #f5de75;
        font-size: 20px;
        margin-bottom: 15px;
      }

      .message {
        font-family: "Bw Modelica Light", serif;
        font-size: 14px;
        color: var(--bone);
        width: 80vw;
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