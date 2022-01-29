import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import repos from './components/RepoList'
import store from './components/store/index'


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {path: '/', component: repos},
    // { path:  '/about', component: about },
    // { path:  '/contact', component: contact },
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
})
