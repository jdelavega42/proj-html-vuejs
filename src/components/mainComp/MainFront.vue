<script>
export default {
    name: "MainFront",
    data(){
        return {
            cards: [
                {
                    img: 'fa-earth-africa',
                    title: 'Worldwide Recognize',
                    description: 'Our online course certificates can be used around the world and also in mosto popular universities and companies.',
                },
                {
                    img: 'fa-desktop',
                    title: 'Mostly Online Learning (sd)',
                    description: 'Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.',
                },
                {
                    img: 'fa-calendar-check',
                    title: 'Graduate in as little as 1 Year',
                    description: 'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy',
                }
            ]
        }
    }
}
</script>

<template>
<div class="container-blue d-flex justify-content-between ms_searchbar">
   <img src="../../assets/images/MasterStudy_logo.svg" alt="">
    <span class="align-self-center"><i class="fa-solid fa-bars"></i>CATEGORY</span>
    <div class="input-group">
        <input type="text" name="searchbar" id="search" placeholder="Search Courses">
        <button class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="cta-group d-flex align-items-center">
        <span class="mx-1"><i class="fa-solid fa-bullhorn"></i>Become an Instructor</span>
        <span class="mx-1"><i class="fa-sharp fa-solid fa-briefcase"></i>For Enterprise</span>
    </div>
    <div class="login-group">
        <span class="mx-1">Log in</span>
        <button class="btn btn-primary mx-1">SIGN UP</button>
        <i class="fa-sharp fa-regular fa-bookmark"></i>
    </div>

</div>
<div class="container-green">
    <div class="d-flex ms_jumbotron row-cols-2">
        <div class="col left d-flex align-items-center">
            <div class="left-content">
                <h2 class="fs-1">Start Investing in You</h2>
                <p class="fs-4">With over 1200 courses in 18 subjects, you're guardanteed to find something that's right for you.</p>
                <button class="btn btn-primary">JOIN FOR FREE</button>
            </div>
        </div>
        <div class="col right">
            <img  class="ms_overflow" src="../../assets/images/base.png" alt="">
        </div>
    </div>
</div>
<div class="container-green d-flex row-cols-3  ms_cards-folder">
    <div v-for="(card, index) in cards" :key="index" class="col ms_card p-2">
        <i :class="`fa-solid fa-3x ${card.img}`"></i>
        <p class="title">{{ card.title }}</p>
        <p class="description"> {{ card.description }}</p>
    </div>
</div>
<div class="container-green">
    <div class="top d-flex">
        <div class="big-pic col-8">
            <img src="../../assets/images/cat_1-1540x750.jpg" alt="">
            <div class="d-flex justify-content-between">
                <p>Software Development</p>
                <p>5 Courses</p>
            </div>
        </div>
        <div class="col-4">
            <div class="col">
                <img src="../../assets/images/cat_2-740x310.jpg" alt="">
                <div class="d-flex justify-content-between">
                <p>Art</p>
                <p>8 Courses</p>
            </div>
            </div>
            <div class="col">
                <img src="../../assets/images/cat_3-740x310.jpg" alt="">
                <div class="d-flex justify-content-between">
                    <p>Material Design</p>
                    <p>5 Courses</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom d-flex row-cols-3">
        <div class="col">
            <img src="../../assets/images/cat_5-740x310.jpg" alt="">
            <div class="d-flex justify-content-between">
                <p>Music</p>
                <p>5 Courses</p>
            </div>
        </div>
        <div class="col">
            <img src="../../assets/images/cat_4-740x310.jpg" alt="">
            <div class="d-flex justify-content-between">
                <p>Exercise</p>
                <p>7 Courses</p>
            </div>
        </div>
        <div class="col">
            <img src="../../assets/images/cat_6-740x310.jpg" alt="">
            <div class="d-flex justify-content-between">
                <p>Photography</p>
                <p>4 Courses</p>
            </div>
        </div>


    </div>
</div>
</template>

<style lang="scss" scoped>
.ms_searchbar {

    .input-group {
        width: auto;
    }
}
.ms_overflow {
    position: relative;
    left: 100px;
}
.ms_cards-folder {
    .ms_card {
        border: 1px solid grey;
        background: lightblue;
        i {
            color: darkblue;
        }
        .title {
            margin-top: 1rem;
            font-weight: bolder;
        }
        .description {
            font-weight: lighter;
        }
    }
}
</style>