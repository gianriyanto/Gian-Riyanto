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
    color: darkgrey;
    font-size: 43px;
    width: 390px;
    border: transparent;
    outline: transparent;
    background-color: var(--bone);
  }
  .input-container{
    display: flex;
    flex-direction: row;
  }
  .button{
    font-family: "Bw Modelica Bold", serif;
    background-color: transparent;
    font-size: 14px;
    text-decoration: none;
    margin: auto 0 auto 20px;
    padding: 9px 20px 9px 20px;
    border: solid black;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    transition: all 0.35s;
    z-index: 2;
  }
  .input-has-value-style{
    font-family: "Bw Modelica Bold", serif;
    background: linear-gradient(to bottom left, #860fee, #5488e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .input-no-value-style{
    font-family: "Bw Modelica Bold", serif;
    color: darkgrey;
    width: 390px;
  }
}
</style>