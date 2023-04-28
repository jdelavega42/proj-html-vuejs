<script>
import CourseCard from './CourseCard.vue';
export default {
    name: "MainRecent",
    components: {
        CourseCard
    },
    props: {
        courses: Array
    },
    data() {
        return {
            categories: ['All Categories', 'Apache', 'Art', 'Communication', 'Electronic', 'Documentary', 'Nvidia', 'Software Development' ],
            activeIndex: 0,
        }
    },
    methods: {
        getActiveIndex(index) {
            this.activeIndex = index;
        },
        getImage(element){
            return new URL(`../../assets/images/${element.img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="ms_container-lg">
        <h2>Recent course</h2>
        <ul class="ms_categories">
            <li v-for="(category, index) in categories" :key="index" @click="getActiveIndex(index)">
                <span :class="{'active': activeIndex === index }">{{ category }}</span>
            </li>
        </ul>
        <ul class="ms_courses">
            <li v-for="(course, index) in courses" :key="index" class="ms_card">
                <CourseCard :course="course"/>
            </li>
        </ul>
        <button class="ms_button">show all</button>
    </div>
</template>

<style lang="scss" scoped>
.ms_container-lg {
    padding: 3rem 0;
    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .ms_categories {
        display: flex;
        justify-content: center;
        gap: 1rem;
        span {
            font-weight: 200;
        }
    }
    .ms_courses {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;
        .ms_card {
            width: calc(100% / 6);
            padding: .5rem;
        }
    }
    .ms_button {
        display: inherit;
        margin: 0 auto;
    }
}

.active {
    padding: .5rem 1rem;
    background-color: lightcyan;
    border-radius: 2rem;
}
</style>