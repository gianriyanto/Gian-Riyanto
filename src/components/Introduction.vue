<template>
  <div class="introduction">
    <div class="content-wrapper">
      <span class="greeting"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out">
        Hey <span class="user"
                  data-aos="fade"
                  data-aos-duration="1800"
                  data-aos-easing="ease-in-out">
              {{inputtedName}},
            </span>
      </span>
      <span class="message"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
              I am a software engineering student on the lookout for experiences to learn new things and make meaningful contributions.
              I love value-adding products, thoughtful user-experiences, and creative solutions that delight people.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: ['name'],
  data(){
    return {
      inputtedName: this.name,
    }
  },
  watch: {
    name: function () {
      this.inputtedName = this.name
    }
  },
}
</script>

<style lang="scss" scoped>

.introduction{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 60px 0 0 15px;
  width: 750px;
  font-size: 35px;
  font-family: "Bw Modelica Bold", serif;
  color: white;
  line-height: 1.7;

  .greeting{
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 768px) {

  .introduction{
    height: 100vh;
    width: 70vw;
    font-size: 23px;
    font-family: "Bw Modelica Bold", serif;
    color: white;
    line-height: 1.8;

    .content-wrapper{
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    .greeting{
      margin-bottom: 10px;
    }
  }
}
</style>