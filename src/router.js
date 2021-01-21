import Vue from 'vue'
import Router from 'vue-router'

// ??? @views/Red
import Red from './views/Red'
import Yellow from './views/Yellow'
import Green from './views/Green'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Red
            //component: () => import('./views/Red.vue')
        },
        {
            path: '/red',
            component: Red
        },
        {
            path: '/yellow',
            component: Yellow
        },
        {
            path: '/green',
            component: Green
        },
        {
            path: '*',
            component: PageNotFound
        }
    ]
})