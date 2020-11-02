<template>
  <div id="MainPage">
    <div class="logo">
      <span> Gian </span>
      <span> Riyanto </span>
    </div>
    <button class="email">
      <span class="email-label"> Get in Touch</span>
    </button>
    <div class="links">
      <a :href="`${publicPath}gianriyanto.pdf`"> <font-awesome-icon class="resume" :icon="['fas', 'file-download']"/> </a>
      <font-awesome-icon class="linkedin" :icon="['fab', 'linkedin']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
      <font-awesome-icon class="github" :icon="['fab', 'github']" v-on:click="goToSite('https://www.linkedin.com/in/riyantogian/')"/>
    </div>
    <div class="introduction">
      <span> Hey {{ inputtedName }}, </span>
      <span> I am a graduating software engineering student on the lookout for new learning experiences. I love delightful products, thoughtful user-experiences, and creative solutions.</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Introduction",
  props: ['name'],
  data(){
    return {
      inputtedName: this.name,
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    goToSite(url) {
      window.open(url, '_blank');
    }
  },
  watch: {
    name: function () {
      this.inputtedName= this.name
    }
  },
}
</script>

<style lang="scss" scoped>

.logo{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 22px;
  left: 30px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  color: #efefeb;
  font-size: 27px;
  line-height: 1.2;
}
.email{
  position: absolute;
  top: 25px;
  right: 30px;
  border: thin solid #b7b7b7;
  border-radius: 6px;
  background-color: transparent;
  outline: none;
  padding: 16px 20px 16px 20px;
  cursor: pointer;

  .email-label{
    position: relative;
    font-family: "Bw Modelica Regular", serif;
    font-size: 14px;
    color: white;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(to bottom left, #8a4fe2, #656aca);
    border-radius: 6px;
    transition: all 0.35s;
  }
  &:hover {
    color: #fff;
    opacity: 1;
  }
  &:hover:after {
    width: 100%;
  }
}
.links{
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
a:visited {
  text-decoration: none;
  color: #efefeb;
}

#MainPage{
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 100vh;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to bottom left, #8b3bff, #4d7bd7);
  box-shadow: 10px 0 20px 2px #9b9b9b;

  .introduction{
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.5;
    font-size: 29px;
    width: fit-content;
    max-width: 45%;
    font-family: "Bw Modelica Bold", serif;
    color: white;
  }
}

</style>