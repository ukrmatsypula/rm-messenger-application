<template>
  <div class="users-list">
    <v-user v-for="chat in chats" :key="chat.id" :user_data="chat" />
  </div>
</template>

<script>
import vUser from '@/components/users/v-user'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'users-list',
  components: {
    vUser,
  },
  computed: {
    ...mapState(['chats']),
  },
  methods: {
    ...mapActions(['FETCH_CHATS', 'SET_USER_TO_HEADER']),
  },
  mounted() {
    this.FETCH_CHATS()
    this.SET_USER_TO_HEADER()
  },
}
</script>

<style lang="scss"></style>
