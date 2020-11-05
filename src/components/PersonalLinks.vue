<template>
  <div id="links"
       data-aos="fade"
       data-aos-duration="2200"
       data-aos-easing="ease-in-out">
    <span class="resume-container">
      <a class="resume" :href="`${publicPath}gianriyanto.pdf`" target="_blank"> <font-awesome-icon class="download-resume" :icon="['fas', 'file-download']"></font-awesome-icon></a>
      <span class="show-label"> Resume </span>
    </span>
    <span class="linkedin-container">
      <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"></font-awesome-icon>
      <span class="show-label"> LinkedIn </span>
    </span>
    <span class="github-container">
      <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
      <span class="show-label"> GitHub </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "PersonalLinks",
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
}
</script>

<style lang="scss" scoped>

#links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 50px;
  color: var(--bone);
  font-size: 2.3em;

  .resume-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 130px;
    padding-left: 10px;
  }
  .linkedin-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 130px;
    padding-left: 4px;
  }
  .github-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 130px;
  }

  .show-label {
    font-size: 15px;
    font-family: "Bw Modelica Regular", serif;
    visibility: hidden;
    padding-left: 30px;
    opacity: 0;
    transition: all 0s, opacity 0.5s ease-in-out;
  }

  .resume, .linkedin, .github {
    cursor: pointer;
    opacity: 1;
    position: relative;
    transition: all .2s ease-in-out;

    &:hover{
      color: #cfc26a;
      opacity: 0.8;
      transform: scale(1.2);
    }

    &:hover + .show-label{
      visibility: visible;
      opacity: 1;
      color: white;
      transform: scale(1.1);
    }
  }
}

a {
  color: var(--bone);
  a:visited {
    text-decoration: none;
    color: var(--bone);
  }
}

</style>