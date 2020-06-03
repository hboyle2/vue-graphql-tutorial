
<template>
  <div>
    <div class="flex flex-column mt3">
      <div>Create a Wizard</div>
      <router-link to="/">to home</router-link>
      <input v-model="name" type="text" placeholder="name" />
      <input v-model="image" type="text" placeholder="image" />
      <input v-model="house" type="text" placeholder="house" />
    </div>
    <button @click="createWizard()">Submit</button>
  </div>
</template>


<script>
import { CREATE_WIZARD, WIZARD_QUERY } from "../constants/graphql.js";
export default {
  name: "CreateWizard",
  data() {
    return {
      name: "",
      image: "",
      house: ""
    };
  },
  methods: {
    createWizard() {
      const { name, image, house } = this.$data;
      console.log(name, image, house);
    }
  }
};
</script>

