import Vue, { createApp } from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
// import VueCompositionAPI from '@vue/composition-api'

// import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
// import '@/libs/tour'

// import "bootstrap/scss/functions";
// import "bootstrap/scss/variables";

// Axios Mock Adapter
// import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
// Vue.use(VueCompositionAPI)

// // Feather font icon - For form-wizard
// // * Shall remove it if not using font-icons of feather-icons - For form-wizard
// import '@core/assets/fonts/feather/iconfont.css' // For form-wizard

// // import core styles
import '@core/scss/core.scss'

// // import assets styles
import '@/assets/scss/style.scss'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// new Vue({
//   router,
//   store,
// //   i18n,
//   render: h => h(App),
// }).$mount('#app')


const app = createApp(App);
// app.config.errorHandler = () => null;
// app.config.warnHandler = () => null;
app.use(router);
app.use(store);
app.mount('#app');

// import { createInertiaApp } from '@inertiajs/vue3'

// createInertiaApp({
//     resolve: name => {
//       const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
//       return pages[`./views/${name}.vue`]
//     },
//     setup({ el, App, props, plugin }) {
//       createApp({ render: () => h(App, props) })
//         .use(plugin)
//         .mount(el)
//     },
//   })