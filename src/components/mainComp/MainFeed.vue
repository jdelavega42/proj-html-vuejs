<script>
export default {
    name: "MainFeed"
}
</script>

<template>
    <div class="ms_container">
        <div class="container-green">
            <div class="container-white">
                <h3 class="title">Come as you are</h3>
                <p>Masterstudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course Masterstudy and the masterstudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.</p>
                <p><span>Tim Sab</span> <br> General Developer, Stylemix Themes </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .ms_container {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    background-image: url(../../assets/images/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    .container-green {
        margin: 0 auto;
        .container-white {
            position: relative;
            background-color: white;
            width: 60%;
            margin: 2rem;
            padding: 2rem;
        }
        .title::after {
            position: absolute;
            top: 50%;
            right: -12.5px;
            content: '';
            height: 25px;
            width: 25px;
            background: white;
            transform: rotate(45deg);
        }
    }
}
</style>