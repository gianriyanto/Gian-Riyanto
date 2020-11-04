<template>
  <div id="About">
    <span class="header"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out">
      About Me.
    </span>
    <span class="content"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Hi! I'm a software engineering undergraduate in the <span class="bold">University of Technology Sydney</span>, on track for graduation by <span class="bold">October 2021</span>. <br/> <br/>
      Driven by my intellectual curiosity, I seek to continue my lifelong learning journey with a collaborative team that shares my passion for value-creating products and delightful user-experience. <br/> <br/>
      I find that nothing is more splendid than learning as a means to make meaningful contributions, especially when I get to meet new people and develop relationships along the way. <br/> <br/>
      Here are some technologies that I've been fiddling with recently:
    </span>
    <span class="skills-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine">
      <span v-for="skill in skills" class="skill" :key="skill"> {{ skill }} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: ["Javascript", "React", "Vue", "HTML & (S)CSS", "Node.js", "Python"]
    }
  }
}
</script>

<style lang="scss" scoped>

#About{
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin: auto;
  color: white;
  width: 600px;
  font-family: "Bw Modelica Regular", serif;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 50px;
    padding-bottom: 20px;
  }
  .content{
    font-size: 17px;
    line-height: 2;
    padding-bottom: 20px;
  }
}

.skills-wrapper{
  flex-direction: row;
  display: inline-block;

  .skill {
    font-family: "Bw Modelica Bold", serif;
    border: 1.6px solid white;
    opacity: 1;
    border-radius: 15px;
    font-size: 11px;
    width: fit-content;
    padding: 7px 14px 7px 14px;
    margin-right: 12px;
  }
}
.bold {
  font-family: "Bw Modelica Bold", serif;
}
</style>