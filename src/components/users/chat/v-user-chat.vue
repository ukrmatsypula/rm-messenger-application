<template>
  <div class="v-user-chat">
    <v-message
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
    <div class="input__field">
      <input
        class="v-user-chat__textfield"
        type="text"
        v-model="textValue"
        @keypress.enter="sendMessage(textValue)"
      />
      <i class="material-icons" @click="sendMessage(textValue)">send</i>
    </div>
  </div>
</template>

<script>
import vMessage from '@/components/users/chat/v-message'

export default {
  name: 'v-user-chat',
  components: {
    vMessage,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    textValue: '',
  }),
  methods: {
    sendMessage(message) {
      let user = { ...this.user }
      let chat = {
        id: this.messages.length + 1,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        }),
        text: this.textValue,
        type: 'own',
      }

      user.chat.push(chat)
    },
  },
}
</script>

<style lang="scss"></style>
