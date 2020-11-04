<template>
  <div id="Experience">
    <span class="header"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
      Experience.
    </span>
    <div class="experience-items"
         data-aos="fade-left"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out">
      <span v-for="job in experiences" :key="job" class="job">
        {{ job.position }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experiences: [
        {
          position: "Big Data Engineer",
          company: "LinkAja",
          responsibilities: "",
          period: "Dec 2019 - Mar 2020"
        },
        {
          position: "SAP Junior Consultant",
          company: "DDG",
          responsibilities: "",
          period: "Nov 2018 - Jun 2019"
        },
        {
          position: "Sales and Product Analyst",
          company: "Eurosoil",
          responsibilities: "",
          period: "Jun 2019 - Aug 2019"
        },
        {
          position: "Programming Teacher Assistant",
          company: "CodeCamp",
          responsibilities: "",
          period: "Nov 2018 - Nov 2018"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#Experience{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 50px;
  width: 750px;

  .header {
    font-family: "Bw Modelica Regular", serif;
    font-size: 20px;
    margin-bottom: 25px;
    color: var(--bone);
    opacity: 0.7;
  }

  .experience-items {
    display: flex;
    flex-direction: column;

    .job{
      font-family: "Bw Modelica Bold", serif;
      color: white;
      font-size: 45px;
      margin-bottom: 33px;
      cursor: pointer;

      &:hover {
        color: #efeb6d;
        transform: translateX(30px);
        transition: ease-out 0.4s;
      }
    }
  }
}
</style>