import Vue from 'vue'
import Router from 'vue-router'

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
            beforeEnter: (to, from, next) => {
                next('/red');
            }
        },
        {
            path: '/red',
            component: Red
            /*
            beforeEnter: (to, from, next) => {
                setTimeout(() => {
                    next('/yellow');
                }, 3000);
            }
            */
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

/*
let sec = 0;
setInterval(() => {
   sec++;
}, 1000);

setInterval(() => {
    if (sec === 3) {
        this.$router.push('yellow');
    }

}, 1000);
*/