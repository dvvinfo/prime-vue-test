import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import './assets/main.css'
const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.mount('#app')
