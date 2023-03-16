<template>
  <div>
    <h1>Find Your Perfect Airbnb Getaways</h1>
    <div v-for="place in places" :key="place.id" class="place-card">
      <img :src="place.image" alt="Place image">
      <div class="place-details">
        <h2>{{ place.title }}</h2>
        <p>{{ place.description }}</p>
        <p>Price per night: {{ place.price }}</p>
        <button @click="book(place.id)">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {
          id: 1,
          title: 'Charming Cottage in the Woods',
          image: 'https://via.placeholder.com/400x300',
          description: 'Escape to this cozy cottage nestled in the forest. Perfect for a weekend getaway with your loved one.',
          price: 100
        },
        {
          id: 2,
          title: 'Luxury Beachfront Condo',
          image: 'https://via.placeholder.com/400x300',
          description: 'Wake up to the sound of waves crashing on the shore in this stunning beachfront condo. Ideal for a family vacation.',
          price: 250
        },
        {
          id: 3,
          title: 'Mountain Retreat with Hot Tub',
          image: 'https://via.placeholder.com/400x300',
          description: 'Relax in the hot tub while enjoying the breathtaking mountain views in this serene retreat. Perfect for a group of friends.',
          price: 150
        }
      ]
    }
  },
  methods: {
    book(id) {
      // Handle booking logic here
      alert(`You booked place ${id}!`);
    }
  }
}
</script>

<style>
.place-card {
  display: flex;
  margin-bottom: 20px;
}

.place-card img {
  width: 400px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
}

.place-details {
  flex: 1;
}
</style>
