<template>
  <div class="introduction">
    <span class="greeting"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out">
      Hey <span class="user"
                data-aos="fade"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out">
            {{ inputtedName }}
          </span>,
    </span>
    <span class="message"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            I am a software engineering student on the lookout for new experiences to learn and make meaningful contributions.
            I love value-adding products, thoughtful user-experiences, and creative solutions that empower and delight people.
    </span>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: ['name'],
  data(){
    return {
      inputtedName: this.name,
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

.introduction{
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 40px;
  width: 715px;
  font-size: 35px;
  font-family: "Bw Modelica Bold", serif;
  color: white;
  .greeting{
    line-height: 2;
    font-size: 45px;
  }
  .message {
    line-height: 1.7;
  }
}
</style>