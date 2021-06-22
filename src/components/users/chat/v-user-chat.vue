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
        v-model.trim="textValue"
        @keypress.enter="sendMessage(textValue)"
      />
      <i class="material-icons" @click="sendMessage(textValue)">send</i>
    </div>
  </div>
</template>

<script>
import vMessage from '@/components/users/chat/v-message'
import { mapActions } from 'vuex'

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
    ...mapActions(['SET_MESSAGE_TO_CHAT']),
    sendMessage(message) {
      let user = { ...this.user }
      let chat = {
        id: new Date().getTime() ,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        }),
        text: this.textValue,
        type: 'own',
      }

      if (Object.keys(chat.text).length) {
        user.chat.push(chat)

        this.SET_MESSAGE_TO_CHAT({ userId: user.id, chat: user }).then(() => {
          this.textValue = ''
        })
      } else {
        alert('Не могу отправить пустое сообщение')
      }
    },
  },
}
</script>

<style lang="scss"></style>
