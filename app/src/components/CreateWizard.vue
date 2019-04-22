
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
import { CREATE_WIZARD, WIZARD_QUERY } from "./constants/graphql";
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
      this.$apollo
        .mutate({
          mutation: CREATE_WIZARD,
          variables: {
            name,
            image,
            house
          },
          update: (store, { data: { createWizard } }) => {
            console.log(data);
            const data = store.readQuery({
              query: WIZARD_QUERY
            });
            console.log(data);
            data.Wizards.push(createWizard);
            store.writeQuery({ query: WIZARD_QUERY, data });
          }
        })
        .then(data => {
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>