<template>
  <div class="content-wrapper">
    <span class="title"> Hi, I'm <span class="name">Gian.</span> </span>
    <span class="subtitle"> Nice to meet you, </span>
    <div>
      <inline-text/>
    </div>
    <!--<router-link class=link to="/mainpage">Learn more</router-link>-->
  </div>
</template>

<script>
import InlineText from "@/components/InlineText";

export default {
  name: "Welcome",
  components: { InlineText,
  }
}
</script>

<style scoped>

  .content-wrapper{
    position: fixed;
    top: 45%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    line-height: 1.3;
  }

  .title{
    font-family: "Bw Modelica Regular", serif;
    font-size: 50px;
  }

  .name{
    font-family: "Bw Modelica Bold", serif;
    background: linear-gradient(to bottom left, #9226f1, #578cea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle{
    font-family: "Bw Modelica Regular", serif;
    font-size: 50px;
  }



</style>