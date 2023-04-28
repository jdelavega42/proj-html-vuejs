<script>
export default {
    name: "MainCTA"
}
</script>

<template>
    <div class="ms_container-lg">
        <div class="ms_card">
            <img src="../../assets/images/image_box_1-221x231.png" alt="">
            <div class="ms_text">
                <h3>Become an Instructor</h3>
                <p>Teach what you love. Masterstudy gives you the tools to create a course.</p>
                <button class="ms_button">START TEACHING</button>
            </div>
        </div>
        <div class="ms_card">
            <img src="../../assets/images/image_box_2-234x231.png" alt="">
            <div class="ms_text">
                <h3>Setup For Business</h3>
                <p>Get unlimited access to 2,500 of Udemy's top courses for your team.</p>
                <button class="ms_button">DOING BUSINESS</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.ms_container-lg {
    display: flex;
    gap: 1rem;
    padding: 4rem 0;
}
.ms_card {
    width: 50%;
    display: flex;
    gap: 2rem;
    padding: 1rem 3rem 1rem 1rem;
    border: 1px solid lightgray;
    .ms_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
}
</style>