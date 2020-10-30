<template>
  <div id="Introduction">
    <div class="container">
      <span> Hey {{ inputtedName }}, </span>
      <span> I love to learn, </span>
      <span> solve problems,</span>
      <span> and build things. </span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Introduction",
  props: ['name'],
  data(){
    return {
      inputtedName: this.name
    }
  },
  watch: {
    name: function () {
      this.inputtedName= this.name
    }
  },
}
</script>

<style scoped>

#Introduction{
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-top: 100vh;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-image: linear-gradient(to bottom left, #a00fee, #5488e5);;
}
.container{
  display: flex;
  flex-direction: column;
  margin: auto;
  line-height: 1.5;
  font-size: 35px;
  width: fit-content;
  font-family: "Bw Modelica Bold", serif;
  color: white;
}

</style>