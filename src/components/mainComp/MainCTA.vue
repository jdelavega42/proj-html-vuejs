<script>
export default {
    name: "MainCTA"
}
</script>

<template>
    <div class="container-pink d-flex">
        <div class="ms_card">
            <img src="../../assets/images/image_box_1-221x231.png" alt="">
            <div class="text">
                <h3>Become an Instructor</h3>
                <p class="description">Teach what you love. Masterstudy gives you the tools to create a course.</p>
                <button class="btn btn-primary">START TEACHING</button>
            </div>
        </div>
        <div class="ms_card">
            <img src="../../assets/images/image_box_2-234x231.png" alt="">
            <div class="text">
                <h3>Setup For Business</h3>
                <p class="description">Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                <button class="btn btn-primary">DOING BUSINESS</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    width: 50%;
    display: flex;
    gap: 2rem;
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>