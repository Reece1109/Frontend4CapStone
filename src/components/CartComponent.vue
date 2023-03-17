<template>
    <div class="cart">
      <h1>Cart Page</h1>
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image" alt="Product Image">
        </div>
        <div class="product-info">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Price: ${{ product.price }}</p>
          <button @click="
          addToCart(product)">Add to Cart</button>
          <router-link :to="{ name: 'product', params: { id: product.id } }">Take a look</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Product 1',
            description: 'This is the description for Product 1',
            price: 10.00,
            image: 'product1.jpg'
          },
          {
            id: 2,
            name: 'Product 2',
            description: 'This is the description for Product 2',
            price: 20.00,
            image: 'product2.jpg'
          },
          {
            id: 3,
            name: 'Product 3',
            description: 'This is the description for Product 3',
            price: 30.00,
            image: 'product3.jpg'
          }
        ],
        cart: []
      }
    },
    methods: {
      addToCart(product) {
        this.cart.push(product);
      }
    }
  }
  </script>
  