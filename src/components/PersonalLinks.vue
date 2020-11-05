<template>
  <div id="links"
       data-aos="fade"
       data-aos-duration="2200"
       data-aos-easing="ease-in-out">
    <span class="link-container">
      <a class="resume" :href="`${publicPath}gianriyanto.pdf`"> <font-awesome-icon class="download-resume" :icon="['fas', 'file-download']"></font-awesome-icon></a>
      <!-- <span class="show-label"> Resume </span> -->
    </span>
    <span class="link-container">
      <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"></font-awesome-icon>
      <!-- <span class="show-label"> LinkedIn </span> -->
    </span>
    <span class="link-container">
      <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
      <!-- <span class="show-label"> GitHub </span> -->
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
  height: 260px;
  position: absolute;
  bottom: 15px;
  left: 50px;
  color: var(--bone);
  font-size: 2.3em;

  .link-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
  }

  .resume, .linkedin, .github {
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;
    position: relative;

    &:hover{
      opacity: 0.8;
      color: #ffe539;
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