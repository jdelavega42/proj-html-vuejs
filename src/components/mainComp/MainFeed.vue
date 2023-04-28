<script>
export default {
    name: "MainFeed"
}
</script>

<template>
    <div class="ms_container">
        <div class="ms_container-sm">
            <div class="ms_feedback">
                <h3>Come as you are</h3>
                <p class="ms_comment">Masterstudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course Masterstudy and the masterstudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.</p>
                <h4>Tim Sab</h4>
                <p class="ms_secondary-text">General Developer, Stylemix Themes </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.ms_container {
    background-image: url(../../assets/images/brooke-cagle-224821-unsplash-1-1920x700.jpg);
    padding: 2rem 0;
    .ms_container-sm {
        margin: 0 auto;
        .ms_feedback {
            position: relative;
            background-color: white;
            width: 60%;
            margin: 2rem;
            padding: 2rem;
            .ms_secondary-text {
                margin-top: -0.5rem;
                font-size: .8rem;
                font-weight: 300;
            }
        }
        h3::after {
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