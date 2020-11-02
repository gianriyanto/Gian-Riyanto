<template>
  <div id="navigation">
    <div class="nav-container">
      <span class="nav-links">Education</span>
      <span class="nav-links">Projects</span>
      <span class="nav-links">Experiences</span>
      <span class="nav-links">Skills</span>
    </div>
    <button class="email">
      <span class="email-label"> Get in Touch</span>
    </button>
  </div>
</template>

<script>


export default {
  name: "Navigation"
}
</script>

<style lang="scss" scoped>

#navigation {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 25px;
  right: 35px;
  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 450px;
    .nav-links {
      font-family: "Bw Modelica Regular", serif;
      font-size: 14px;
      color: white;
    }
  }
  .email {
    border: thin solid #b7b7b7;
    border-radius: 6px;
    background-color: transparent;
    outline: none;
    padding: 16px 20px 16px 20px;
    cursor: pointer;

    .email-label {
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
}
</style>