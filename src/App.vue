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
  margin: 0px !important;
  padding: 0px !important;
}
:root {
  --bone: #f5f5f2;
  --gradient: linear-gradient(to bottom left, #9645f8, #287dbf);
  --gradient-green: linear-gradient(to bottom left, #3fbaa1, #31aad4);
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
