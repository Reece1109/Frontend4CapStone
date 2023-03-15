<template>
    <div id="ProductView">
        <div class="container">
            <div class="row" v-if="!isLoading && products">
                <div v-for="product in products" :key="product.name" class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <img class="card-img-top" image-fluid :src="product.image" :alt="product.name" style="width: 400px; height: 300px;">
                        <div class="card-body">
                            <h4 class="card-title">{{ product.name }}</h4>
                            <h5>R{{ product.price }}</h5>
                            <p class="card-text">{{ product.description }}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-outline-dark">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SpinnerE v-if="isLoading" />
    </div>
    </template>

<script>
import SpinnerE from '../components/ProductSpinnerE.vue'

export default{
components: {
    SpinnerE
}
}
</script>
