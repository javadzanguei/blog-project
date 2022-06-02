import { createApp } from 'vue'
import App from './App.vue'
import ModalMixin from './mixins/ModalMixin';

let app = createApp(App);

// app.mixin(ModalMixin)

app.mount('#app')
