<template>
  <div id="links"
       data-aos="fade"
       data-aos-duration="2200"
       data-aos-easing="ease-in-out">
    <a class="resume" :href="`${publicPath}gianriyanto.pdf`"> <font-awesome-icon class="download-resume" :icon="['fas', 'file-download']"/> </a>
    <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
    <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
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
  height: 210px;
  position: absolute;
  bottom: 15px;
  left: 50px;
  color: var(--bone);
  font-size: 2em;

  .resume, .linkedin, .github {
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;

    &:hover{
       opacity: 0.8;
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