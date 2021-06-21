<template>
  <div class="v-contact-user-info">
    <img src="https://picsum.photos/200/300" class="info__avatar" />
    <div class="info__content">
      <div class="info__name">
        <span>{{ contact_data.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Call</button>
        <button class="start-chat">Start chat</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'v-contact-user-info',
  data: () => ({
    contact_data: {},
  }),
  computed: {
    ...mapState(['contacts']),
  },
  mounted() {
    this.contacts.find(contact => {
      if (contact.id === this.$route.query.id) {
        this.contact_data = contact
      }
    })
  },
}
</script>

<style lang="scss"></style>
