<template>
  <div id="app">
    <div class="component-wrapper">
      <!-- Knows which component to render based on url automatically
      under the hood (router/index.js)-->
      <router-view/>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@200;300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');

#app {
  color: black;
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

</style>
