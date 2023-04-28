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
<div class="ms_container-md">
    <img src="../../assets/images/MasterStudy_logo.svg" alt="">
    <div class="ms_input-group">
        <label for="search"></label> <span><i class="fa-solid fa-bars"></i>CATEGORY</span>
        <input type="text" name="searchbar" id="search" placeholder="Search Courses">
        <button class="ms_btn btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="ms_cta-group">
        <span><i class="fa-solid fa-bullhorn"></i>Become an Instructor</span>
        <span><i class="fa-sharp fa-solid fa-briefcase"></i>For Enterprise</span>
    </div>
    <div class="ms_login-group">
        <span>Log in</span>
        <button class="ms_button">SIGN UP</button>
        <i class="fa-sharp fa-regular fa-bookmark"></i>
    </div>

</div>
<div class="ms_container-md">
    <div class="d-flex ms_jumbotron row-cols-2">
        <div class="ms_col">
            <div class="left-content">
                <h1>Start Investing in You</h1>
                <p>With over 1200 courses in 18 subjects, you're guardanteed to find something that's right for you.</p>
                <button class="ms_button">JOIN FOR FREE</button>
            </div>
        </div>
        <div class="ms_col">
            <img  class="ms_overflow" src="../../assets/images/base.png" alt="">
            <img class="elem1" src="../../assets/images/magnifier.png" alt="">
            <img class="elem2" src="../../assets/images/book1.png" alt="">
            <img class="elem3" src="../../assets/images/book2.png" alt="">
        </div>
    </div>
</div>
<div class="ms_container-sm ms_cards-folder">
    <div v-for="(card, index) in cards" :key="index" class="ms_card">
        <i :class="`fa-solid fa-3x ${card.img}`"></i>
        <p class="title">{{ card.title }}</p>
        <p> {{ card.description }}</p>
    </div>
</div>
<div class="ms_container-sm ms_courses">
    <div class="ms_row">
        <div class="ms_col-8">
            <img src="../../assets/images/cat_1-1540x750.jpg" alt="">
            <div class="ms_text">
                <p class="ms_title">Software Development</p>
                <p>5 Courses</p>
            </div>
        </div>
        <div class="ms_column ms_col-4">
            <div>
                <img src="../../assets/images/cat_2-740x310.jpg" alt="">
                <div class="ms_text">
                    <p class="ms_title">Art</p>
                    <p>8 Courses</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/cat_3-740x310.jpg" alt="">
                <div class="ms_text">
                    <p class="ms_title">Material Design</p>
                    <p>5 Courses</p>
                </div>
            </div>
        </div>
        </div>
        <div class="ms_row">
            <div class="ms_col-4">
                <img src="../../assets/images/cat_5-740x310.jpg" alt="">
                <div class="ms_text">
                    <p class="ms_title">Music</p>
                    <p>5 Courses</p>
                </div>
            </div>
            <div class="ms_col-4">
                <img src="../../assets/images/cat_4-740x310.jpg" alt="">
                <div class="ms_text">
                    <p class="ms_title">Exercise</p>
                    <p>7 Courses</p>
                </div>
            </div>
            <div class="ms_col-4">
                <img src="../../assets/images/cat_6-740x310.jpg" alt="">
                <div class="ms_text">
                    <p class="ms_title">Photography</p>
                    <p>4 Courses</p>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 3rem;
    font-weight: 300;
}
.ms_container-md {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    span {
        align-self: center;
        font-weight: 300;
        font-size: .8rem;
    }
    .ms_input-group {
        width: 40%;
        display: flex;
        align-items: center;
        input {
            padding: 1rem;
            width: 60%;
            height: 1.5rem;
            border: 1px solid lightgray;
        }
        .ms_btn {
            height: 1.5rem;
            padding: 1rem .5rem; 
            background-color: lightblue;
            border: 1px solid lightgray;
            border-radius: 0 5px 5px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        span {
            margin-right: 1rem;
        }

    }
    .ms_cta-group {
        display: flex;
        align-items: center;
        span {
            margin: 0 .5rem;
            i {
                margin: 0 .5rem;
            }
        }
    }
    .ms_login-group {
        display: flex;
        gap: .5rem;
        align-items: center;
    }
}
.ms_jumbotron {
    display: flex;
    .ms_col {
        width: 50%;
        display: flex;
        align-items: center;
        position: relative;
        p {
            font-size: 1.5rem;
        }
    }
    .ms_overflow {
        position: relative;
        left: 100px;
    }
    .elem1 {
        position: absolute;
        top: 352px;
        right: -22px;
        &:hover {
            animation: floating 2000ms ease infinite;
        }
    }
    .elem2 {
        position: absolute;
        top: 135px;
        right: -43px;
        &:hover {
        animation: floating 2000ms ease infinite;
        }
    }
    .elem3 {
        position: absolute;
        top: 289px;
        right: 55px;
        &:hover {
        animation: floating 2000ms ease infinite;
        }
    }

    @keyframes floating {
        0%,
        100% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(-20%);
        }
        
    }
}
.ms_cards-folder {
    display: flex;
    gap: 1rem;
    padding: 3rem 0;

    .ms_card {
        width: calc(100% / 3);
        padding: .5rem;
        border-radius: 1rem;
        background: lightcyan;
        transition: 200ms;

        &:hover {
            color: white;
            background-color: lightseagreen;
        }
        i {
            color: darkblue;
        }
        .title {
            margin-top: 1rem;
            font-weight: bolder;
        }
    }
}
.ms_courses {
    padding: 3rem 0;
    .ms_row {
        display: flex;
        gap: 1rem;
        .ms_col-8 {
            width: calc((100% /3) * 2);
        }
        .ms_col-4 {
            width: calc(100% / 3);
        }
        .ms_text {
            display: flex;
            justify-content: space-between;
            .ms_title {
                font-weight: 400;
            }
        }
        
    }
    .ms_column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>