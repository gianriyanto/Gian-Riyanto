<template>
  <div id="About"
       data-aos="fade"
       data-aos-duration="1000"
       data-aos-easing="ease-in-out">
    <span class="header">
      About Me.
    </span>
    <span class="content"
          v-for="(line, id) in aboutMe.split('\n')"
          :key="id">
        {{line}}
    </span>
    <span class="skills-headers">
      Here are some things I've been tinkering with lately
    </span>
    <span class="skills-wrapper">
      <span v-for="skill in skills" class="skill" :key="skill"> {{ skill }} </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: ["React", "Vue", "Python", "Kubernetes", "Domain Driven Design"],
      aboutMe: `I am a software engineer with a strong growth mindset, an appreciation for software craftsmanship, and an obsession for learning. I show up everyday so that I get to collaboratively solve interesting problems by building elegant software products at scale.
I enjoy the collaborative process of decomposing high-level problems into manageable bite-sized components and working through them methodically as a team. To me, nothing is more rewarding than an opportunity to transform new learnings into meaningful contributions, especially when I get to meet people and develop relationships along the way.`
    }
  }
}
</script>

<style lang="scss" scoped>

#About{
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  margin: auto;
  color: #1f1f1f;
  width: 42vw;

  .header{
    font-family: "Bw Modelica Bold", serif;
    font-size: 20px;
    margin-bottom: 30px;
    color: #b3b3b3;
  }
  .content{
    font-family: "Bw Modelica Regular", serif;
    font-size: 16px;
    line-height: 1.8;
    padding-bottom: 20px;
    white-space: pre-line;
  }
  .skills-headers{
    font-family: "Bw Modelica Regular", serif;
    font-size: 17px;
    line-height: 1.8;
    padding-bottom: 20px;
  }
  .skills-wrapper{
    flex-direction: row;
    display: flex;

    .skill {
      font-family: "Bw Modelica Bold", serif;
      border: 1.5px solid #1f1f1f;;
      color: #1f1f1f;
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
      font-family: "Bw Modelica Bold", serif;
      font-size: 20px;
      color: #7e7e7e;
      opacity: 0.7;
      margin-bottom: 30px;
    }
    .content{
      color: #1f1f1f;
      font-family: "Bw Modelica Regular", serif;
      font-size: 15px;
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