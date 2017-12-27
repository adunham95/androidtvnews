import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(Router);
Vue.use(VueMaterial);

import fontawesome from '@fortawesome/fontawesome'
import fontPro from '@fortawesome/fontawesome-pro-regular'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(fontPro, brands);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
