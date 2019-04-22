
<template>
  <div>
    <div class="flex flex-column mt3">
      <input v-model="name" type="text" placeholder="name">
      <input v-model="image" type="text" placeholder="image">
      <input v-model="house" type="text" placeholder="house">
    </div>
    <button @click="createWizard()">Submit</button>
  </div>
</template>


<script>
import { CREATE_WIZARD } from "./constants/graphql";
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
      this.$apollo.mutate({
        mutation: CREATE_WIZARD,
        variables: {
          name,
          image,
          house
        }
      });
    }
  }
};
</script>