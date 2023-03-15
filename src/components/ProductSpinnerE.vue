<template >
    <div class="container">
        <img src="https://i.postimg.cc/8zhmRCbC/giphy.gif" alt="">
        <div class="row" v-if="!isLoading && products"></div>
        <div v-for="product in products" :key="product.name" class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <img class="card-img-top" image-fluid: src="product.image" style="width:450px" alt="product.name" height:350px> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductSpinner',
};
</script>
<style>

</style>