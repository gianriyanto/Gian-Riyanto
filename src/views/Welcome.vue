<template>
  <div class="content-wrapper">
    <div id="welcome">
      <div class="container">
        <span class="message"
              data-aos="fade-down"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out">
          Hello, I'm
          <span class="name"
                data-aos="fade-down"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out">
            Gian.
          </span>
        </span>
        <span class="message"
              data-aos="fade"
              data-aos-duration="2700"
              data-aos-easing="ease-in-out">
          Nice to meet you,
        </span>
        <inline-text v-bind:nameData="name"
                     data-aos="fade-up"
                     data-aos-duration="1800"
                     data-aos-easing="ease-in-out"/>
      </div>
    </div>
    <MainPage v-bind:name="name.nameInput.slice(0, -1)"/>
  </div>
</template>

<script>
import InlineText from "@/components/InlineText";
import MainPage from "@/views/MainPage";

export default {
  title: 'Gian Riyanto',
  name: "Welcome",
  components: {
    MainPage,
    InlineText
  },
  data() {
    return {
      name: { nameInput: 'Name?', edit: false, isValid: false},
    }
  },
}
</script>

<style lang="scss" scoped>

.content-wrapper {
  display: flex;
  flex-direction: column;
}

#welcome{
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background-color: var(--bone);

  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.4;
    font-size: 56px;
    width: fit-content;

    .message {
      font-family: "Bw Modelica Bold", serif;
    }

    .name{
      font-family: "Bw Modelica Bold", serif;
      background: linear-gradient(to bottom left, #9226f1, #578cea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@media only screen and (max-width: 768px) {
  #welcome{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--bone);
    overflow: scroll;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    .container {
      display: flex;
      flex-direction: column;
      width: 78vw;
      padding: 0;
      margin: auto;
      line-height: 1.4;
      font-size: 32px;

      .message {
        font-family: "Bw Modelica Bold", serif;
      }

      .name{
        font-family: "Bw Modelica Bold", serif;
        background: linear-gradient(to bottom left, #9226f1, #578cea);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

</style>