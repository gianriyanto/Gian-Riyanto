<template>
  <div id="app">
      <label v-if="name.edit">
          <input
              class="input-editing"
              v-model="name.nameInput"
              @blur="name.edit=false; onChangeText(name.nameInput); $emit('update')"
              @keyup.enter="name.edit=false; $emit('update')"
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
            }">
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
        this.name.nameInput = input + '.';
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

<style scoped>

.input-container{
  display: flex;
  flex-direction: row;
}
.button{
  font-family: "Bw Modelica Bold", serif;
  background-color: transparent;
  font-size: 14px;
  text-decoration: none;
  padding: 9px 20px 9px 20px;
  border: solid black;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: all 0.35s;
  z-index: 2;
}
.button {
  position: relative;
  transition: all 0.35s;
  margin: auto 0 auto 20px;
  padding: 9px 20px 9px 20px;
  background-color: transparent;
  color: black;
  font-weight: bold;
  font-size: 13px;
  border: solid black;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
}
.button span {
  z-index: 1;
}
.button:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(to bottom left, #a035ee, #588ce9);
  border-radius: 30px;
  transition: all 0.35s;
}
.button:hover {
  color: #fff;
  opacity: 1;
}
.button:hover:after {
  width: 100%;
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
.input-editing{
  font-family: "Bw Modelica Bold", serif;
  color: darkgrey;
  font-size: 43px;
  width: 390px;
}
</style>