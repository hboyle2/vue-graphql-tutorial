/* eslint-disable */ 
<template>
  <div>
    <div>{{wizard.name}}</div>
    <img v-bind:src="wizard.image" id="image">
    <div>{{wizard.house}}</div>
  </div>
</template>

<script>
export default {
  name: "Wizard",
  props: ["wizard"]
};
</script>

<style>
img {
  height: 200px;
  width: 200px;
  padding: 20px;
}
</style>

