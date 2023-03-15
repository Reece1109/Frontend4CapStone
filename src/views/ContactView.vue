<template>
<div class="container">
    <section class="contact d-flex align-items-center flex-column">
        <h1 class="text-white">Contact Us</h1>
        <form action="https://formspree.io/f/mwkjqvvr" method="post" class="mt-5">
            <div class="name-surname mb-3">
                <input type="text" class="form-control" placeholder="enter your name">
                <input type="text" class="form-control" placeholder="enter your surname">
            </div>
            <div class="email mb-3">
                <input type="email" class="form-control" placeholder="email address">
            </div>
            <div class="message">
                <textarea name="message" id="message"  rows="4"
                class="w-100 form-control" placeholder="Leave me a message"></textarea>
            </div>
            <div class="submit-button  d-flex justify-content-center">
                <button class="btn-submit">Submit</button>
            </div>

            <div class="social-media-icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-github"></i>
            </div>
        </form>
    </section>
</div>
</template>
<script>
export default {


};
</script>

<style scoped>
.container{
    background-image: url('https://i.postimg.cc/kMKZVGQD/bc88423ce1cf987a3ad345c29be81923.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 80px 0;
    height: 100vh;
    width: 100vw;
}



form {
    height: 100%;
    width: 40%;
    min-width: 600px;
    border-radius: 5px;
    background: linear-gradient(to bottom right,#121212d5,#1c1c1cd7);
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: center;
}

input, textarea {
    border-radius: 4px;
    padding: .5rem 1rem;
}

textarea {
    resize: none;
}

.name-surname {
    display: flex;
    gap: 1rem;
}

.btn-submit {
    height: 2.5rem;
    width: 10rem;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 20px;
    margin-top: 1rem;
    background: linear-gradient( #fff, #8b8a8a);
}

.social-media-icons {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.social-media-icons i{
    font-size: 25px;
    color: #fff;
}

</style>