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
export default {
  name: "WizardList",
  data() {
    return {
      Wizards: [
        {
          id: 1,
          name: "Harry Potter",
          house: "Gryffindor",
          image: "http://hp-api.herokuapp.com/images/harry.jpg"
        },
        {
          id: 2,
          name: "Hermione Granger",
          house: "Gryffindor",
          image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
        },
        {
          id: 3,
          name: "Ron Weasley",
          house: "Gryffindor",
          image: "http://hp-api.herokuapp.com/images/ron.jpg"
        }
      ]
    };
  },
  components: {
    Wizard
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
