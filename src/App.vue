<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/places">Places</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/promotions">Promotions</router-link> |
      <router-link to="/contact">Contact Us</router-link>
    </nav>
    <router-view/>

  </div>
</template>
<script>
import NavBar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    // eslint-disable-next-line vue/no-unused-components
    Footer
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #edf0f3;
}

nav a.router-link-exact-active {
  color: #1aa9ae;
}

</style>
