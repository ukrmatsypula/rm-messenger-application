<template>
  <div class="v-contact-list">
    <v-contact-user />
  </div>
</template>

<script>
import vContactUser from '@/components/contacts/v-contact-user'

export default {
  name: 'v-contact-list',
  components: {
    vContactUser,
  }
}
</script>

<style></style>
