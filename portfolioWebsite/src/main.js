import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import solid icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* import brand icons */
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, fab)

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
