import Vue from 'vue'
import Router from 'vue-router'

import vContactList from '@/components/contacts/v-contact-list'
import vContactUserInfo from '@/components/contacts/v-contact-user-info'
import vUserList from '@/components/users/v-users-list'
import vUserChat from '@/components/users/chat/v-user-chat'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactList,
    },

    {
      path: '/contact',
      name: 'contact',
      component: vContactUserInfo,
    },

    {
      path: '/chats',
      name: 'chats',
      component: vUserList,
    },

    {
      path: '/chat',
      name: 'chat',
      component: vUserChat,
      props: true,
    },
  ],
})

export default router
