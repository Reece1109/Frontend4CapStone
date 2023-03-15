<template>
  <div class="home">
    <div class="home-text">
      <h1>Welcome to the HiveHouse</h1>
  </div>
</div>

<div class="home-buttons">
<router-link to="/products" custom v-slot="{ navigate }"><a @click="navigate" role="./ProductView.vue"
    class="btn">Cart</a></router-link>
<a class="btn">About Us</a>
<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
  aria-controls="offcanvasBottom">Follow Us</button>
</div>


</template>

<script>
  export default {
    name: 'HomeView',

  }
</script>
<style scoped>
.home{
  background-image: url(https://i.postimg.cc/BbRmMbX7/b6ee8c2e0d990997372b3fa12c8d0b24.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 85vh;
  width: 85vw;
}
</style>

