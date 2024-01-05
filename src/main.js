import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n/message';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from './router/router.js';
import './data/projects.js';
import './style/home.css';
import './style/tailwind.css';

import { MotionPlugin } from '@vueuse/motion'

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;


const app = createApp(App);
app.use(i18n)
app.use(MotionPlugin);
app.use(router);

app.mount("#app");