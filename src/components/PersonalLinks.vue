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

@media only screen and (min-width: 769px) {
  #links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    width: 230px;
    position: fixed;
    bottom: 30px;
    left: 15px;
    color: #c4c4c4;
    opacity: 0.8;
    font-size: 30px;

    .resume-container .linkedin-container, .github-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .resume, .linkedin, .github {
      cursor: pointer;
      opacity: 1;
      position: relative;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: 0.7;
        transform: translateY(4px);
      }
    }
  }

  a {
    color: #c4c4c4;

    a:visited {
      text-decoration: none;
      color: #c4c4c4;
    }
  }
}

@media only screen and (max-width: 768px) {
  #links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30vw;
    font-size: 35px;
    color: #1f1f1f;

    .resume-container .linkedin-container, .github-container{
      padding-top: 3px;
      display: flex;
      flex-direction: row;
    }

    .show-label {
      display:none;
    }
  }

  a {
    color: #1f1f1f;
    a:visited {
      text-decoration: none;
      color: #1f1f1f;
    }
  }
}

</style>