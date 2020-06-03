import Vue from "vue";
import Router from "vue-router";
import WizardList from "@/components/WizardList";
import CreateWizard from "../components/CreateWizard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WizardList",
      component: WizardList
    },
    {
      path: "/create",
      name: "CreateWizard",
      component: CreateWizard
    }
  ]
});
