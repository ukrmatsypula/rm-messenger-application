<template>
  <div class="v-header">
    <div class="v-header__back">
      <i class="material-icons">keyboard_arrow_left</i>
      <span @click="goBack">Back</span>
    </div>
    <div class="v-header__user-info">
      <span>Tom</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss"></style>
