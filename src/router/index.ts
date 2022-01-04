import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Random from '../views/Random.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Random',
    component: Random,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
