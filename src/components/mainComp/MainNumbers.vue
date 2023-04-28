<script>
export default {
    name: "MainNumbers"
}
</script>

<template>
    <div class="ms_container">
        <h2>We are Proud</h2>
        <p>Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master's level degrees.</p>
        <div class="ms_data">
            <div class="ms_col">
                <h2 class="ms_number">2000</h2>
                <p class="ms_info">STUDENTS</p>
            </div>
            <div class="ms_col">
                <h2 class="ms_number">950</h2>
                <p class="ms_info">COURSES</p>
            </div>
            <div class="ms_col">
                <h2 class="ms_number">1600</h2>
                <p class="ms_info">HOURS VIDEO</p>
            </div>
            <div class="ms_col">
                <h2 class="ms_number">150</h2>
                <p class="ms_info">COUNTRIES REACHED</p>
            </div>
        </div>
    <img src="../../assets/images/we_proud.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.ms_container {
    text-align: center;
    padding-top: 2rem;

    .ms_data {
        display: flex;
        margin: 4rem auto 0;
        width: 50%;
        .ms_col {
            width: 25%;
            .ms_info {
                font-size: .75rem;
            }
        }
    }
    .ms_col:not(:last-of-type){
        border-right: 1px solid lightgray;
    }
    img {
        margin-top: -8rem;
    }
}
</style>