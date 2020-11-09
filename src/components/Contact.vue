<template>
<div id="Contact">
  <div class="header"
       data-aos="fade-down"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    Say Hello.
  </div>
  <div class="email"
       data-aos="fade"
       data-aos-duration="3000"
       data-aos-easing="ease-in-out">
    <a href="mailto:li.griyanto@gmail.com">li.griyanto@gmail.com</a>
  </div>
  <div class="message"
       data-aos="fade"
       data-aos-duration="3000"
       data-aos-easing="ease-in-out">
    Let's keep in touch {{ inputtedName }}! <br/>
    I'm one inbox away, whether you have a question or you just want to say hi, I'm always up for a chat.
  </div>
</div>
</template>

<script>

export default {
  name: "Contact",
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
    transform: translate(0, -30vh);
    height: 60vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 0 auto;
    padding: 0;
    text-align: center;
    font-family: "Bw Modelica Bold", serif;

    .header{
      color: white;
      font-size: 40px;
      margin-bottom: 25px;
    }

    .email{
      text-align: center;
      color: #f5de75;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .message{
      font-family: "Bw Modelica Light", serif;
      font-size: 18px;
      color: var(--bone);
      width: 80vw;
      line-height: 2;
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