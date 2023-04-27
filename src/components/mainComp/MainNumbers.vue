<script>
export default {
    name: "MainNumbers"
}
</script>

<template>
    <div class="ms_container text-center pt-5">
        <h2>We are Proud</h2>
        <p>Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master's level degrees.</p>
        <div class="row row-cols-4 w-50 mx-auto">
            <div class="col">
                <div class="number fs-1">2000</div>
                <div class="info">STUDENTS</div>
            </div>
            <div class="col">
                <div class="number fs-1">950</div>
                <div class="info">COURSES</div>
            </div>
            <div class="col">
                <div class="number fs-1">1600</div>
                <div class="info">HOURS VIDEO</div>
            </div>
            <div class="col">
                <div class="number fs-1">150</div>
                <div class="info">COUNTRIES REACHED</div>
            </div>
        </div>
    <img src="../../assets/images/we_proud.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
.col:not(:last-of-type){
    border-right: 2px solid grey
}
.info {
    font-weight: lighter;
    font-size: .8rem;
}
img {
    margin-top: -100px;
}
</style>