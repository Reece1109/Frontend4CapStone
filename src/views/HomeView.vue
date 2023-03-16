<template>
  <div class="home">
    <div class="home-text">
      <h1>Welcome to the HiveHouse</h1>
      <p>A stylish and comfortable home away from home</p>
      <button class="btn btn-primary">Book now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home {
  background-image: url(https://i.postimg.cc/BbRmMbX7/b6ee8c2e0d990997372b3fa12c8d0b24.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-text {
  text-align: center;
  color: white;
}

h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 2rem;
  margin-bottom: 3rem;
}

.btn {
  font-size: 1.5rem;
  padding: 1rem 3rem;
  border-radius: 2rem;
  background-color: #ff5a5f;
  border-color: #ff5a5f;
}
</style>
