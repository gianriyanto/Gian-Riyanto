<template>
  <div class="content-wrapper">
    <background id="background"/>
    <div id="welcome">
      <div class="container">
        <span class="message"
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out">
          Hello, I'm
          <span class="name"
                data-aos="fade"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out">
            {{ myName }}.
          </span>
        </span>
        <span class="message"
              data-aos="fade"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out">
          Nice to meet you,
        </span>
        <inline-text v-bind:nameData="name"
                     data-aos="fade"
                     data-aos-duration="2500"
                     data-aos-easing="ease-in-out"/>
      </div>
    </div>
    <MainPage class="" v-bind:name="name.nameInput.slice(0, -1)"/>
  </div>
</template>

<script>
import InlineText from "@/components/InlineText";
import MainPage from "@/views/MainPage";
import Background from "../components/Background";

export default {
  title: 'Gian Riyanto',
  name: "Welcome",
  components: {
    Background,
    MainPage,
    InlineText
  },
  data() {
    return {
      name: { nameInput: 'Name?', edit: false, isValid: false},
      myName: "Gian"
    }
  },
}
</script>

<style lang="scss" scoped>

.content-wrapper {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100vw;
  overflow-x: hidden;
}

#welcome{
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  letter-spacing: -1px;
  background: rgba( 255, 255, 255, 0.1 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );

  .container {
    display: flex;
    flex-direction: column;
    margin: auto;
    line-height: 1.4;
    font-size: 56px;
    width: fit-content;

    .message {
      font-family: "Bw Modelica Bold", serif;
      color: #1f1f1f;
    }

    .name{
      font-family: "Bw Modelica Bold", serif;
      color: #1f1f1f;
    }
  }
}

@media only screen and (max-width: 768px) {

  .content-wrapper{
    display: flex;
    flex-direction: column;
  }

  #welcome{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    overflow-y: hidden;
    position: absolute;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      width: 76vw;
      padding: 0 0 0 0;
      line-height: 1.7;
      font-size: 32px;

      .message {
        font-family: "Bw Modelica Bold", serif;
      }

      .name{
        font-family: "Bw Modelica Bold", serif;
        background: #1f1f1f;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

</style>