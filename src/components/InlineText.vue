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
      <div :class="applyInputStyle(name.nameInput)" v-else>
          <label @click="onEditText"> {{name.nameInput}} </label>
      </div>
  </div>
</template>

<script>
export default {
  name: "InlineText",
  data() {
    return {
      name: { nameInput: 'Name?', edit: false },
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
      } else {
        this.name.nameInput = input + '.';
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

.input-has-value-style{
  font-family: "Bw Modelica Bold", serif;
  font-size: 55px;
  background: linear-gradient(to bottom left, #9226f1, #578cea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.input-no-value-style{
  font-family: "Bw Modelica Bold", serif;
  color: darkgrey;
  font-size: 55px;
  width: 400px;
}
.input-editing{
  font-family: "Bw Modelica Bold", serif;
  color: darkgrey;
  font-size: 55px;
  width: 400px;
}

</style>