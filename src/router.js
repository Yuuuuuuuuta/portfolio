import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    // {
    //   path: '/Profile',
    //   name: 'Profile',
    //   component: Profile
    // },
    // {
    //   path: '/Skill',
    //   name: 'Skill',
    //   component: Skill
    // },
    // {
    //   path: '/Works',
    //   name: 'Works',
    //   component: Works
    // },
    // {
    //   path: '/Contact',
    //   name: 'Contact',
    //   component: Contact
    // }
  ]
})
