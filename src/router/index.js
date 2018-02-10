import Vue from 'vue';
import Router from 'vue-router';
import LinesList from '@/components/LinesList';
import LineDetail from '@/components/LineDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LinesList',
      component: LinesList,
      props: true,
    },
    {
      path: '/line/:id',
      name: 'line',
      component: LinesList,
      props: true,
    },
    {
      path: '/line/mobile/:id',
      name: 'mobile',
      component: LineDetail,
      props: true,
    },
  ],
});
