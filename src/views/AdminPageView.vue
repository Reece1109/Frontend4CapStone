<template>
  <div class="admin-page">
    <h1>Admin Page</h1>
    <img src="./airbnb-logo.png" alt="Airbnb Logo" />
  </div>
</template>

<script>
import Admin from "./components/Admin.vue";

export default {
  name: "App",
  components: {
    Admin,
  },
};
</script>

<style>
.admin-page {
  background-color: red;
  color: white;
}
</style>
