import Vue from 'vue'
import App from './App.vue'
import router from "./router"
const helmet = require('helmet')
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.use(VueSimpleMarkdown)
Vue.use(helmet)
library.add(faGithub, faTwitter, faPaperPlane, faLinkedin, faInstagram, faPaw)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
