<template>
  <div id="About">
    <span class="header"> About Me </span>
    <span class="content">
      Hi! I'm a software engineering undergraduate in the <span class="bold">University of Technology Sydney</span>, on track for graduation by <span class="bold">October 2021</span>. <br/> <br/>
      Driven by my intellectual curiosity, I seek to continue my lifelong learning journey with a collaborative team that shares my passion for value-creating products and delightful user-experience. <br/> <br/>
      I find that nothing is more splendid than learning as a means to make meaningful contributions, especially when I get to meet new people and develop relationships along the way. <br/> <br/>
      Here are some technologies that I've been fiddling with recently:
      <ul class="skills">
        <li class="bold"> Javascript </li>
        <li class="bold"> React </li>
        <li class="bold"> Vue </li>
        <li class="bold"> Node.js </li>
        <li class="bold"> HTML & (S)CSS </li>
        <li class="bold"> Python </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style lang="scss" scoped>

#About{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
  margin: auto;
  color: white;
  width: 560px;
  font-family: "Bw Modelica Regular", serif;

  .content{
    font-size: 15px;
    line-height: 1.8;
  }

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 25px;
    padding-bottom: 20px;
  }
  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
.bold {
  font-family: "Bw Modelica Bold", serif;
}
</style>