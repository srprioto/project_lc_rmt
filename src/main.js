import { createApp } from 'vue'
import '@/assets/styles/reboot.css';
import '@/assets/styles/app.css';

import router from "@/router";

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import icons from './Fa';

import App from './App.vue'

library.add({ ...icons })

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueChartkick)
    .use(VueAxios, axios)
    .mount('#app')





// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })