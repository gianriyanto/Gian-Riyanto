<template>
<div id="Contact">
  <div class="header"
       data-aos="fade-down"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    Say hello.
  </div>
  <div class="content"
       data-aos="fade-left"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <a class="mailtoui" href="mailto:li.griyanto@gmail.com">li.griyanto@gmail.com</a>
  </div>
  <div class="sub-header"
       data-aos="fade"
       data-aos-duration="3000"
       data-aos-easing="ease-in-out">
    I'm one inbox away, whether you have a question or just wanna say hi, I'm always up for a chat!
  </div>
</div>
</template>

<script>

export default {
  name: "Contact",
  data() {
    return {
      email: 'li.griyanto@gmail.com'
    }
  }
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
    margin-bottom: 15px;
  }

  .sub-header{
    font-family: "Bw Modelica Light", serif;
    font-size: 15px;
    color: white;
    opacity: 0.7;
    width: 450px;
    line-height: 1.5;
  }

  .content{
    color: #f5de75;
    font-size: 40px;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.7;
      transition: 0.3s;
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

</style>