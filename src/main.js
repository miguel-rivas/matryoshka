import Vue from "vue";
import app from "./app.vue";
import router from "./modules/router";
import { store } from "./modules/store";
import "./stylesheets/application.scss";
import "./modules/commons";
import "@/modules/tooltip";
import "@/modules/nano";
import VueKonva from "vue-konva";
import 'nano-grid/components';

//-- db

import { user } from "./db/user";
import i18n from "./i18n";


// ---------------- Selection

store.commit("addColumn",
  {
    absoluteWidth: false,
    absoluteHeight: false,
    width: 0,
    height: 0,
    subtraction: 100,
  }
);

Vue.use(VueKonva);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  data: () => ({
    user: user,
  }),
  render: h => h(app)
}).$mount('#app');