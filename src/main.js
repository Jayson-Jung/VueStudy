import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
import AppView from './components/AppView.vue';
import BookComponent from './components/BookComponent.vue';

const app = createApp(App); // Root Component 생성 옵션
app.component('BookComponent', BookComponent);
app.component('AppHeader', AppHeader);
app.component('AppNav', AppNav);
app.component('AppView', AppView);
app.mount('#app');
