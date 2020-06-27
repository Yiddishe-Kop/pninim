import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import PortalVue from 'portal-vue'
import Axios from 'axios';
import { InertiaApp } from '@inertiajs/inertia-vue'
import Icon from '@/components/ui/Icon'
import Badge from '@/components/ui/Badge'
import BaseButton from '@/components/ui/BaseButton'

Vue.config.productionTip = false

const axios = Axios.create({
  baseUrl: 'https://pninim.yiddishe-kop.com'
})
Vue.use(VueFormulate, {
  uploader: axios,
  uploadUrl: '/upload'
})


Vue.mixin({ methods: { route: window.route } })
Vue.use(PortalVue)
Vue.use(InertiaApp)

Vue.component('BaseButton', BaseButton)
Vue.component('Icon', Icon)
Vue.component('Badge', Badge)

let appEl = document.getElementById('app')

const app = new Vue({
  metaInfo: {
    titleTemplate: (title) => title ? `${title} - Halpern CRM` : 'Halpern CRM'
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(appEl.dataset.page),
      resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(appEl)
