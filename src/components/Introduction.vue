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
              {{ introduction }}
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
      introduction: "I am a software engineering student on the lookout for experiences to learn new things and make meaningful contributions.\n" +
          "I love value-adding products, thoughtful user-experiences, and creative solutions that delight people."
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
  min-width: 605px;
  width: 46vw;
  font-size: 39px;
  font-family: "Bw Modelica Bold", serif;
  color: white;
  line-height: 1.7;

  .content-wrapper{
    display: flex;
    flex-direction: column;
  }

  .greeting{
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 768px) {

  .introduction{
    height: fit-content;
    width: 70vw;
    padding: 5vh 0 0 0;
    font-size: 23.5px;
    font-family: "Bw Modelica Bold", serif;
    color: white;
    line-height: 1.9;

    .content-wrapper{
      display: flex;
      flex-direction: column;
    }

    .greeting{
      margin-bottom: 10px;
    }
  }
}
</style>