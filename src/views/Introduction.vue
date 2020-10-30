<template>
  <div id="Introduction">
    <div class="content-wrapper">
      <span> Hey {{ inputtedName }}, </span>
      <span> As you can see, there's not </span>
      <span> much in this web portfolio. </span>
      <span> Just another reason for me </span>
      <span> to fiddle with Vue... </span>
      <span class="subtext"> (and yes, its pretty damn cool) </span>
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
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom left, #a00fee, #5488e5);;
}
.content-wrapper{
  display: flex;
  flex-direction: column;
  margin: auto;
  line-height: 1.5;
  font-size: 30px;
  width: fit-content;
  font-family: "Bw Modelica Bold", serif;
  color: white;
}
.subtext{
  font-family: "Bw Modelica Regular", serif;
  font-size: 20px;
}

</style>