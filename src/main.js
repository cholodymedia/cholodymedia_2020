import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//++Fontawesome++
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLightbulb, faBookOpen, faGlobeEurope, faExclamationCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub, faEnvelope, faLightbulb, faBookOpen, faGlobeEurope, faExclamationCircle, faCheckCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//--Fontawesome--
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
