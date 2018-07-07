import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faUser, faDatabase)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
