import Vue from "vue";
import Router from "vue-router";
import WizardList from "@/components/WizardList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WizardList",
      component: WizardList
    }
  ]
});
