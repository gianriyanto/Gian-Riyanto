<template>
  <div id="links">
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
  color: #efefeb;
  font-size: 2em;
  .resume, .linkedin, .github {
    cursor: pointer;
  &:hover{
     opacity: 0.7;
   }
  }
}

a {
  color: #efefeb;
  a:visited {
    text-decoration: none;
    color: #efefeb;
  }
}

</style>