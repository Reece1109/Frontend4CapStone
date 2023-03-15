<template>
<div class="about">
    <h1>Welcome to the HiveHouse</h1>

    <p>Discover the best Airbnb stop around. Also know as HouseHive the best Getaway/Over night and simply just a quick Rejuvenate.experience the perfect fusion of Leisure and Pleasure of our Getaways.</p>

  <div class="home-buttons">
<router-link to="/products" custom v-slot="{ navigate }"><a @click="navigate" role="./ProductView.vue"
    class="btn">Cart</a></router-link>
<a class="btn">About Us</a>
<button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
  aria-controls="offcanvasBottom">Follow Us</button>

  </div>
</div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.home{
  background-image: url('https://i.postimg.cc/kMKZVGQD/bc88423ce1cf987a3ad345c29be81923.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 85vh;
  width: 85vw;
}
</style>

