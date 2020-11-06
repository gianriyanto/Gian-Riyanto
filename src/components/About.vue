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
      Hi! I'm a software engineering undergraduate (BEHons. Software) in the <span class="bold">University of Technology Sydney</span>, on track for graduation by <span class="bold">October 2021</span>. <br/> <br/>
      Driven by my intellectual curiosity and appreciation for thoughtful design, I seek to continue my lifelong learning journey amongst a collaborative team that shares my passion for delightful products and user-experience. <br/> <br/>
      I find that nothing is more rewarding than being able to transform new learnings into something that, especially when I get to meet new people and develop relationships along the way. <br/> <br/>
      <span class="skills-headers"> Here are some technologies that I've been fiddling with recently: </span>
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
      skills: ["Javascript", "React", "Vue", "HTML", "(S)CSS", "Node.js", "Python"],
    }
  }
}
</script>

<style lang="scss" scoped>

#About{
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 30px;
  margin: auto;
  color: white;
  width: 630px;
  font-family: "Bw Modelica Regular", serif;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 45px;
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
    border: 2px solid white;
    color: white;
    opacity: 1;
    border-radius: 20px;
    font-size: 12px;
    width: fit-content;
    padding: 8px 15px;
    margin-right: 12px;
  }
}
.bold {
  font-family: "Bw Modelica Bold", serif;
}

@media only screen and (max-width: 768px) {
  #About{
    display: flex;
    flex-direction: column;
    color: white;
    width: 85vw;
    padding-right: 15px;
    font-family: "Bw Modelica Regular", serif;

    .header{
      font-family: "Bw Modelica Bold", serif;
      font-size: 30px;
      padding-bottom: 20px;
    }
    .content{
      font-size: 17px;
      line-height: 2;
      padding-bottom: 20px;
    }
  }
  .skills-headers{
    display: none;
  }

  .skills-wrapper {
    display: none;
  }

  .bold {
    font-family: "Bw Modelica Bold", serif;
  }
}
</style>