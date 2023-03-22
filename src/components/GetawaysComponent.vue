<template>
  <div class="container my-5">
    <h1 class="text-center mb-5 bg-info">Featured Getaways</h1>
    <div class="row">
      <div v-for="getaway in featuredGetaways" :key="getaway.id" class="col-md-4">
        <div class="card mb-4">
          <img :src="getaway.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ getaway.name }}</h5>
            <p class="card-text">{{ getaway.description }}</p>
            <ul class="list-unstyled">
              <li v-for="amenity in getaway.amenities" :key="amenity">{{ amenity }}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
  <p class="h4">$ {{ getaway.price }}/night</p>
  <div>
    <button @click="addToCart(getaway)" class="btn btn-primary mr-2">Add to Cart</button>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-center my-5 bg-info">All Getaways</h1>
    <div class="row">
      <div v-for="getaway in allGetaways" :key="getaway.id" class="col-md-4">
        <div class="card mb-4">
          <img :src="getaway.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ getaway.name }}</h5>
            <p class="card-text">{{ getaway.description }}</p>
            <ul class="list-unstyled">
              <li v-for="amenity in getaway.amenities" :key="amenity">{{ amenity }}</li>
            </ul>
            <div class="d-flex justify-content-between align-items-center">
              <p class="h4">$ {{ getaway.price }}/night</p>
              <button @click="addToCart(getaway)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Getaway: [
        {
          id: 1,
          name: 'Beach House',
          description: 'Beautiful beach house with ocean view.',
          amenities: ['Ocean view', 'Private pool', 'Beach access'],
          image: '',
          price: 500
        },
        {
          id: 2,
          name: 'Mountain Retreat',
          description: 'Cozy cabin in the mountains.',
          amenities: ['Mountain view', 'Hot tub', 'Hiking trails'],
          image: '',
          price: 400
        },
        {
          id: 3,
          name: 'City Apartment',
          description: 'Modern apartment in the heart of the city.',
          amenities: ['City view', 'Gym', 'Concierge'],
          image: '',
          price: 300
        },
        {
          id: 4,
          name: 'Lake House',
          description: 'Peaceful lake house with a dock and boat access.',
      amenities: ['Lake view', 'Dock', 'Boat access'],
      image: '',
      price: 450
    },
    {
      id: 5,
      name: 'Desert Oasis',
      description: 'Luxurious oasis in the middle of the desert.',
      amenities: ['Desert view', 'Private pool', 'Spa'],
      image: '',
      price: 600
    },
    {
      id: 6,
      name: 'Island Getaway',
      description: 'Private island with stunning ocean views.',
      amenities: ['Island view', 'Private beach', 'Infinity pool'],
      image: '',
      price: 800
    }

  ],
  cart: []
};
},
computed: {
featuredGetaways() {
// return a subset of getaways to be featured
return this.Getaway.slice(0, 3);
},
allGetaways() {
// return all getaways except for the featured ones
return this.Getaway.slice(3);
}
},
methods: {
addToCart(getaway) {
// add the selected getaway to the cart
this.cart.push(getaway);
}
}
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 15px;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.list-unstyled {
  margin: 0;
  padding: 0;
}

.card-body {
  height: 180px;
}

.btn {
  border-radius: 5px;
  margin-top: 10px;
}

</style>

