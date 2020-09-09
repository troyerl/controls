import Vue from 'vue';
import VueRouter from 'vue-router';

import ProcedureInfo from '../components/ProcedureInfo.vue';
import MissionControls from '../components/MissionControls.vue';

import route from './routes';
Vue.use(VueRouter);

const routes = [
  // common
  { path: route.procedureInfo, name: 'procedureInfo', component: ProcedureInfo },
  { path: route.missionControls, name: 'missionControls', component: MissionControls }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;