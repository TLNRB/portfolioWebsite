import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import solid icons */
import {
  faCirclePlay,
  faPlay,
  faDownload,
  faCircleInfo,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
/* import brand icons */
import { faGithub, faJs, faVuejs, faSass, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faCirclePlay,
  faPlay,
  faDownload,
  faCircleInfo,
  faXmark,
  faLinkedinIn,
  faGithub,
  faJs,
  faVuejs,
  faSass
)

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
