<template>
  <div id="background">
    <span class="glass-cover"/>
    <span class="circle-0"/>
    <span class="circle-1"/>
    <span class="circle-2"/>
    <span class="circle-3"/>
    <span class="circle-4"/>
    <span class="circle-5"/>
    <span class="circle-7"/>
    <span class="circle-8"/>
    <span class="circle-9"/>
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
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(90.0px);
    -webkit-backdrop-filter: blur(90.0px);
  }

  .circle-0{
    z-index: 0;
    display: flex;
    position: absolute;
    transform: translate(85vw, -5vh);
    background-color: #7966e5;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }

  .circle-1 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(65vw, 0);
    background-color: #e963a3;
    height: 600px;
    width: 500px;
    border-radius: 50%;
  }

  .circle-2 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(75vw, 30vh);
    background-color: #f6b167;
    height: 600px;
    width: 550px;
    border-radius: 50%;
  }

  .circle-3 {
    display: none;
    z-index: -1;
    //display: flex;
    position: absolute;
    transform: translate(10vw, 70vh);
    background-color: #f1a56c;
    height: 550px;
    width: 450px;
    border-radius: 50%;
  }

  .circle-4 {
    z-index: -2;
    display: flex;
    position: absolute;
    transform: translate(55vw, 15vh);
    background-color: #fcca47;
    height: 600px;
    width: 550px;
    border-radius: 50%;
  }

  .circle-5 {
    z-index: -3;
    display: flex;
    position: absolute;
    transform: translate(-4vw, 45vh);
    background-color: #6466de;
    height: 450px;
    width: 700px;
    border-radius: 50%;
  }

  .circle-7 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(-4vw, 25vh);
    background-color: #5feacb;
    height: 500px;
    width: 300px;
    border-radius: 50%;
  }
  .circle-8 {
    z-index: -1;
    display: flex;
    position: absolute;
    transform: translate(-5vw, 60vh);
    background-color: #6db7f6;
    height: 550px;
    width: 500px;
    border-radius: 50%;
  }
}

</style>