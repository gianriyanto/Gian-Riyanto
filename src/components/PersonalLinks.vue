<template>
  <div id="links"
       data-aos="fade"
       data-aos-duration="2200"
       data-aos-easing="ease-in-out">
    <span class="resume-container">
      <a class="resume" :href="`${publicPath}gianriyanto.pdf`" target="_blank"> <font-awesome-icon class="download-resume" :icon="['fas', 'file-download']"></font-awesome-icon></a>
      <span class="show-label"> My Resume </span>
    </span>
    <span class="linkedin-container">
      <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"></font-awesome-icon>
      <span class="show-label"> LinkedIn </span>
    </span>
    <span class="github-container">
      <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://github.com/gianriyanto')"/>
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
  position: fixed;
  bottom: 0px;
  left: 40px;
  color: var(--bone);
  opacity: 0.8;
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

@media only screen and (max-width: 768px) {
  #links {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-content: center;
    padding: 0;
    margin: auto;
    height: 40vh;
    width: 80vw;
    color: var(--bone);
    font-size: 50px;

    .resume-container {
      display: flex;
      flex-direction: row;
      width: fit-content;
      align-items: center;
      margin: auto;
      padding: 0;
    }
    .linkedin-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: fit-content;
      margin:auto;
      padding: 0;
    }
    .github-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: fit-content;
      margin:auto;
      padding: 0;
    }

    .show-label {
      display:none;
      font-size: 17px;
      font-family: "Bw Modelica Regular", serif;
      padding-left: 25px;
      color: white;
    }

    .resume, .linkedin, .github {
      margin: auto;
    }
  }

  a {
    color: var(--bone);
    a:visited {
      text-decoration: none;
      color: var(--bone);
    }
  }
}

</style>