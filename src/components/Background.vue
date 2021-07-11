<template>
  <div id="background">
    <span class="glass-cover"/>
    <span class="circle-0"/>
    <span class="circle-1"/>
    <span class="circle-2"/>
    <span class="circle-3"/>
    <span class="circle-4"/>
    <span class="circle-5"/>
    <span class="circle-6"/>
    <span class="circle-7"/>
    <span class="circle-8"/>
  </div>
</template>

<script>
export default {
  name: "Background"
}
</script>

<style scoped lang="scss">

#background{
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow-x: hidden;

  .glass-cover {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(90.0px);
    -webkit-backdrop-filter: blur(90.0px);
  }

  .circle-0{
    width: 40vw;
    height: 40vh;
    border-radius: 50%;
    background-color: #dae8ff;
  }

  .circle-1 {
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(70vw, 0);
    background-color: #77bade;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }

  .circle-2 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 30vh);
    background-color: #7ce2ca;
    height: 400px;
    width: 550px;
    border-radius: 50%;
  }

  .circle-3 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(15vw, 40vh);
    background-color: #9ad9f6;
    height: 550px;
    width: 450px;
    border-radius: 50%;
  }

  .circle-4 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(-15vw, 65vh);
    background-color: #f5b986;
    height: 650px;
    width: 550px;
    border-radius: 50%;
  }

  .circle-5 {
    z-index: -3;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 44vh);
    background-color: #8de9ce;
    height: 600px;
    width: 450px;
    border-radius: 50%;
  }

  .circle-6 {
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(80vw, 215vh);
    background-color: #77b9d9;
    height: 500px;
    width: 500px;
    border-radius: 50%;
  }

  .circle-7 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 180vh);
    background-color: #fcac75;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }

  .circle-8 {
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 210vh);
    background-color: #acfcdc;
    height: 500px;
    width: 400px;
    border-radius: 50%;
  }

}

</style>