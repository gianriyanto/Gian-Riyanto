<template>
  <div class="modal">
    <template slot="callToActionText">
      Test the VueJS modal here
    </template>
    <template slot="modalHeader">
      Sign in to your account
    </template>
    <template slot="modalBody">
      <label>E-mail</label>
      <input type="email" placeholder="mail@example.com">
      <label>Password</label>
      <input type="password" placeholder="+8 chars" auto-complete="new-password">

    </template>
    <template slot="modalFooter">
      <button class="button">Sign in</button>
    </template>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style lang="scss" scoped>

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  flex-direction: column;
}
</style>