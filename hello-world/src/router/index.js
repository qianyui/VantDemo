import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '@/components/button/demo.vue'
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';

Vue.use(VueRouter)
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Picker);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
]

const router = new VueRouter({
  routes
})

export default router
