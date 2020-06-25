import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { InertiaApp } from '@inertiajs/inertia-vue'

Vue.config.productionTip = false

Vue.mixin({ methods: { route: window.route } })
Vue.use(VueFormulate)
Vue.use(InertiaApp)

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
