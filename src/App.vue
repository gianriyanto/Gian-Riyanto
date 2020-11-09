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
  color: black;
}
html, body {
  margin: 0 !important;
  padding: 0 !important;
}
@media only screen and (max-width: 768px) {
  *, html, body, div, span,{
    margin: 0 !important;
    padding: 0 !important;
  }
}
:root {
  --bone: #ffffff;
  --gradient: linear-gradient(#be5afc, #124d7a);
  --gradient-green: linear-gradient(to bottom left, #2ca48b, #4594b0);
  --gradient-mobile: linear-gradient(#9a48f6, #06528c, #9641ea, #305db7, #7e46e0, #642fe2);
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
