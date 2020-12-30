<template>
  <div id="About">
    <span class="header"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      About Me.
    </span>
    <span class="content"
          v-for="(line, id) in aboutMe.split('\n')"
          :key="id"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out">
        {{line}}
    </span>
    <span class="skills-headers"
          data-aos="fade"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out">
      Here are some technologies that I've been tinkering with recently:
    </span>
    <span class="skills-wrapper"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      <span v-for="skill in skills" class="skill" :key="skill"> {{ skill }} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: ["React", "Vue", "HTML", "(S)CSS", "Node.js", "Javascript", "Python"],
      aboutMe: `Hey there, I am a software engineer with a strong growth mindset, obsession for detail, and a passion for value creation. I am currently studying (BEHons. Software) at the University of Technology Sydney, on track for graduation by October 2021.
I enjoy the collaborative process of decomposing high-level problems into manageable bite-sized components with a focus on building meaningful products that empower and delight people.
I believe nothing is more rewarding than an opportunity to transform new things I learn to tackle interesting problems, especially when I get to meet like-minded people and develop relationships along the way.`
    }
  }
}
</script>

<style lang="scss" scoped>

#About{
  display: flex;
  flex-direction: column;
  padding: 60px 0 0 30px;
  margin: auto;
  color: white;
  width: 40vw;
  min-width: 515px;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 45px;
    padding-bottom: 20px;
  }
  .content{
    font-family: "Bw Modelica Regular", serif;
    font-size: 15px;
    line-height: 1.8;
    padding-bottom: 20px;
    white-space: pre-line;
  }
  .skills-headers{
    font-family: "Bw Modelica Regular", serif;
    font-size: 15px;
    line-height: 1.9;
    padding-bottom: 20px;
  }
  .skills-wrapper{
    flex-direction: row;
    display: flex;

    .skill {
      font-family: "Bw Modelica Bold", serif;
      border: 1.5px solid white;
      color: white;
      opacity: 1;
      border-radius: 20px;
      font-size: 12px;
      width: fit-content;
      padding: 8px 1vw;
      margin-right: 0.9vw;
    }
  }
}

@media only screen and (max-width: 768px) {

  #About{
    height: fit-content;
    width: 70vw;
    padding: 0;
    display: flex;
    flex-direction: column;

    .header{
      font-family: "Bw Modelica Regular", serif;
      font-size: 20px;
      margin-bottom: 5px;
      color: var(--bone);
      opacity: 0.7;
    }
    .content{
      color: white;
      font-family: "Bw Modelica Regular", serif;
      font-size: 13px;
      line-height: 2.2;
    }
    .skills-headers{
      display: none;
    }

    .skills-wrapper {
      display: none;
    }
  }
}
</style>