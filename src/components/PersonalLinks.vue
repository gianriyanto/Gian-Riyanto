<template>
  <div id="links"
       data-aos="fade"
       data-aos-duration="2500"
       data-aos-easing="ease-in-out">
    <span class="resume-container">
      <a class="resume" :href="`${publicPath}gianriyanto.pdf`" target="_blank"> <font-awesome-icon class="download-resume" :icon="['fas', 'file-download']"></font-awesome-icon></a>
    </span>
    <span class="linkedin-container">
      <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"></font-awesome-icon>
    </span>
    <span class="github-container">
      <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://github.com/gianriyanto')"/>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  width: 230px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #b1acac;
  opacity: 0.8;
  font-size: 30px;

  .resume-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
  }
  .linkedin-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 4px;
  }
  .github-container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .resume, .linkedin, .github {
    cursor: pointer;
    opacity: 1;
    position: relative;
    transition: all .2s ease-in-out;

    &:hover{
      opacity: 0.7;
      transform: translateY(4px);
    }
  }
}

a {
  color:  #b1acac;
  a:visited {
    text-decoration: none;
    color: #1f1f1f;
  }
}

@media only screen and (max-width: 768px) {
  #links {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: auto 0 5vh 0;
    height: 33vh;
    width: 80vw;
    color: var(--bone);
    font-size: 45px;

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