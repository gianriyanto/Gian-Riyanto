<template>
  <div id="InLineText">
      <label v-if="name.edit">
          <input
              class="input-editing"
              v-model="name.nameInput"
              v-on:blur="name.edit=false; onChangeText(name.nameInput); $emit('update')"
              v-on:keyup.enter="$event.target.blur()"
              v-focus
          >
      </label>
      <div v-else class="input-container">
        <div :class="applyInputStyle(name.nameInput)">
            <label @click="onEditText"> {{name.nameInput}} </label>
        </div>
        <button v-if="name.isValid" class="button" v-scroll-to="{
                el: '#MainPage',
                easing: [.2, .80, .30, 1],
                duration: 1100
            }"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine">
            Check Me Out
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: "InlineText",
  props: ['nameData'],
  data() {
    return {
      name: this.nameData,
    }
  },
  methods: {
    onEditText: function() {
      this.name.nameInput = '';
      this.name.edit = true;
    },
    onChangeText: function(input) {
      if (input === '') {
        this.name.nameInput = 'Name?';
        this.name.edit = false;
        this.name.isValid = false;
      } else {
        this.name.nameInput = input.charAt(0).toUpperCase() + input.slice(1) + '.';
        this.name.isValid = true;
      }
    },
    applyInputStyle: function(input) {
      return [(input.length>0 && input !== 'Name?') ? 'input-has-value-style' : 'input-no-value-style']
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#InLineText{
  .input-editing{
    font-family: "Bw Modelica Bold", serif;
    color: #a0a0a0;
    font-size: 56px;
    width: 390px;
    border: transparent;
    outline: transparent;
    background-color: transparent;
  }
  .input-container{
    display: flex;
    flex-direction: row;
  }
  .button{
    font-family: "Bw Modelica Bold", serif;
    background-color: transparent;
    font-size: 15px;
    text-decoration: none;
    margin: auto 0 auto 30px;
    padding: 12px 30px;
    border: solid #2f2f2f;
    color: #2f2f2f;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    z-index: 2;
    transition: all .35s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }
  }
  .input-has-value-style{
    font-family: "Bw Modelica Bold", serif;
    background: #2f2f2f;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .input-no-value-style{
    font-family: "Bw Modelica Bold", serif;
    color: #a0a0a0;
    width: 390px;
  }
}

@media only screen and (max-width: 768px) {
  #InLineText{
    width: 75vw;

    .input-editing{
      font-family: "Bw Modelica Bold", serif;
      color: darkgrey;
      font-size: 32px;
      border: transparent;
      outline: transparent;
      background-color: transparent;
      width: 75vw;
    }
    .input-container{
      display: flex;
      flex-direction: column;
      width: 75vw;
    }
    .button{
      width: 75vw;
      margin: 10px auto auto auto;
      font-family: "Bw Modelica Bold", serif;
      background-color: transparent;
      font-size: 15px;
      text-decoration: none;
      padding: 12px 30px 12px 30px;
      border: 2px solid black;
      border-radius: 35px;
      outline: none;
      cursor: pointer;
      transition: all .35s ease-in-out;
    }
    .input-has-value-style{
      font-family: "Bw Modelica Bold", serif;
      background: #1f1f1f;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 75vw;
    }
    .input-no-value-style{
      font-family: "Bw Modelica Bold", serif;
      color: #a0a0a0;
      width: 75vw;
    }
  }
}
</style>