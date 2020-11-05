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
  height: 270px;
  position: absolute;
  bottom: 10px;
  left: 42px;
  color: var(--bone);
  font-size: 40px;

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
    font-size: 17px;
    font-family: "Bw Modelica Regular", serif;
    visibility: hidden;
    padding-left: 25px;
    opacity: 0;
    transition: all 0s, opacity 0.5s ease-in-out;
  }

  .resume, .linkedin, .github {
    cursor: pointer;
    opacity: 1;
    position: relative;
    transition: all .2s ease-in-out;

    &:hover{
      opacity: 0.7;
      transform: translateX(4px);
    }

    &:hover + .show-label{
      visibility: visible;
      opacity: 1;
      color: #eada6d;
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