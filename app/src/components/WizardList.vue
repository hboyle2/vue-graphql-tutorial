<template>
  <div>
    <h2>Harry Potter and the GraphQL Tutorial</h2>
    <router-link to="/create">Create New Wizard</router-link>
    <div class="container">
      <wizard v-for="wizard in Wizards" :key="wizard.id" :wizard="wizard"></wizard>
    </div>
  </div>
</template>

<script>
import Wizard from "./Wizard";
import { WIZARD_QUERY } from "./constants/graphql.js";
export default {
  name: "WizardList",
  data() {
    return {
      Wizards: [],
      loading: 0
    };
  },
  components: {
    Wizard
  },
  apollo: {
    Wizards: {
      query: WIZARD_QUERY
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
