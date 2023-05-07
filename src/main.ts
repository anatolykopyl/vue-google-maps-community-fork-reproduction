import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import VueGoogleMaps from 'vue-google-maps-community-fork';

const app = createApp(App);

app.use(VueGoogleMaps, {
  load: {
    key: 'API_KEY',
    libraries: 'places',
  },
});

app.mount('#app');
