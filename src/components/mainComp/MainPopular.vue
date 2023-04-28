<script>
import CourseCard from './CourseCard.vue';
export default {
    name: "MainPopular",
    components: {
        CourseCard
    },
    props: {
        courses: Array
    },
    data() {
        return {
            miniArray: this.courses.slice(1, 7),
            no1: 1,
            no2: 6,
        }
    },
    methods: {
        showNext(){
            let num1 = this.no1;
            let num2 = this.no2;
            console.log(num1, num2);
            this.miniArray = this.courses.slice(num1 + 1, num2 +1)
            this.no1 = num1 + 1;
            this.no2 = num2 + 1;

        },
        showPrev(){
            let num1 = this.no1;
            let num2 = this.no2;
            console.log(num1, num2);
            this.miniArray = this.courses.slice(num1 - 1, num2 - 1);
            this.no1 = num1 - 1;
            this.no2 = num2 - 1;
        }

    }
}
</script>

<template>
    <div class="ms_container-lg">
        <h2>Popular courses</h2>
        <ul class="ms_courses">
            <li v-for="(course, index) in miniArray" :key="index" class="ms_card">
                <CourseCard :course="course" />
            </li>
        </ul>
        <div class="ms_input-group">
            <button v-show="this.no1 !== 0" @click="showPrev"><i class="fa-solid fa-chevron-left"></i></button>
            <button v-show="this.no2 !== this.courses.length - 1" @click="showNext"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_container-lg {
    padding: 3rem 0;
    h2 {
        text-align: center;
    }
    .ms_courses {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 3rem;
        .ms_card {
            width: calc(100% / 6);
            padding: .5rem;
        }
    }
    .ms_input-group {
        text-align: center;
        button {
            padding: .5rem 1rem;
            border: none;
            transition: 200ms;
            &:hover {
                background-color: lightseagreen;
                color: white;
            }            
        }

    }
}
</style>