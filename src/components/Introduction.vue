<template>
  <div class="introduction"
      data-aos="fade"
      data-aos-duration="2100"
      data-aos-easing="ease-in-out">
    <div class="content-wrapper">
      <span class="greeting"> Hey <span class="user">{{inputtedName}}, </span></span>
      <span class="message"> {{ introduction }} </span>
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
      introduction: "I'm a software engineer, product builder, and a lifelong learner.\n" +
          "I do my best work as part of a team of like-minded people, iteratively conspiring " +
          "to design and engineer products that delight and empower people."
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


@media only screen and (min-width: 1836px) {
  .introduction {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 56vw;
    padding: 0 0 0 0;
    font-family: "Bw Modelica Bold", serif;
    color: #1f1f1f;
    line-height: 1.7;

    .content-wrapper {
      display: flex;
      flex-direction: column;
      font-size: 2.2vw;

      .greeting {
        margin-bottom: 10px;
      }

      .message {
      }
    }
  }
}

@media only screen and (max-width: 1835px) {
  .introduction{
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0 0 0 15px;
    width: 50vw;
    font-size: 2.3vw;
    font-family: "Bw Modelica Bold", serif;
    color: #1f1f1f;
    line-height: 1.7;

    .content-wrapper{
      display: flex;
      flex-direction: column;
    }

    .greeting{
      margin-bottom: 10px;
    }
  }
}

@media only screen and (max-width: 768px) {

  .introduction{
    height: fit-content;
    width: 70vw;
    padding: 5vh 0 0 0;
    font-size: 23px;
    font-family: "Bw Modelica Bold", serif;
    color: #343434;
    line-height: 1.8;

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