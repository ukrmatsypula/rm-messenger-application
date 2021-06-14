<template>
  <div class="v-main-wrapper">
    <v-header />
    <router-view></router-view>
    <v-bottom-nav />
  </div>
</template>

<script>
import vHeader from '@/components/layouts/v-header'
import vBottomNav from '@/components/layouts/v-bottom-nav'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vBottomNav,
  },
}
</script>

<style lang="scss"></style>
