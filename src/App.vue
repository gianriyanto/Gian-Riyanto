<template>
  <div id="app">
      <!-- Knows which component to render based on url automatically
      under the hood (router/index.js)-->
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap');

#app {

}
html, body {
  margin: 0 !important;
  padding: 0 !important;
}
@media only screen and (max-width: 769px) {
  *, html, body, div, span, {
    margin: 0 !important;
    padding: 0 !important;
  }
}
:root {
  --bone: #ffffff;
  --gradient-black: linear-gradient(#1d1d1d, #1f1f1f);
  --gradient: linear-gradient(to top right, #4776E6, #8E54E9);
  --gradient-mobile: linear-gradient(#4776E6, #8E54E9, #4776E6, #8E54E9);
}
@font-face {
  font-family: "Bw Modelica Bold";
  src: local("Bw Modelica Bold"),
  url(./fonts/BwModelica/BwModelica-Bold.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Regular";
  src: local("Bw Modelica Regular"),
  url(./fonts/BwModelica/BwModelica-Regular.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Light";
  src: local("Bw Modelica Light"),
  url(./fonts/BwModelica/BwModelica-Light.otf) format("truetype");
}
@font-face {
  font-family: "Bw Modelica Hairline";
  src: local("Bw Modelica Hairline"),
  url(./fonts/BwModelica/BwModelica-Hairline.otf) format("truetype");
}
</style>
