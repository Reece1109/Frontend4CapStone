<template>
  <div class="admin-page">
    <h1>Admin Page</h1>
    <img src="" alt="Airbnb Logo">
    <div class="col-12 mt-5">
      <h3>Admin Table</h3>
      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-target="#addAdmin">
        ADD
      </button>
        <thead>
          <tr>Name</tr>
          <tr>Surname</tr>
          <tr>Email</tr>
          <tr>Cellphone Number</tr>
          <tr>Role</tr>
          <tr>Edit</tr>
          <tr>Delete</tr>
        </thead>

        <tr v-for=" in this Admin"></tr>
    </div>
  </div>
</template>

<script>


export default {
  name: "AdminPage",
};
</script>

<style>
.admin-page {
  background-color: red;
  color: white;
}
</style>
