<script>
export default {
    name: "MainRecent",
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
                <div class="mc_wrapper">
                    <img :src="getImage(course)" alt="">
                    <span v-if="course.label" :class="course.label" class="label">{{ course.label }}</span>
                    <div class="ms_text">
                        <p class="category-text">{{course.category}}</p>
                        <p class="name-text">{{course.name}}</p>
                        <p class="bottom-text">
                            <span class="hours">{{course.hours}}</span>
                            <span class="price">{{course.price}}</span>
                            <span class="old-price">{{ course.oldPrice }}</span></p>
                    </div>
                </div>
            </li>
        </ul>
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
        .ms_card {
            width: calc(100% / 6);
            padding: .5rem;
            .label{
                text-transform: uppercase;
                color: white;
                padding: .2rem;
                font-size: .5rem;
                position: absolute;
                top: 5px;
                right: 5px;
            }
            .new {
                background-color: lightseagreen;
            }
            .hot {
                background-color: red;
            }
            .special {
                background-color: orange;
            }
            .mc_wrapper {
                border: 1px solid lightgrey;
                display: flex;
                flex-direction: column;
                height: 100%;
                position: relative;
                img {
                    height: 117.2px;
                }
                .ms_text {
                    padding: .5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .category-text {
                        font-size: .75rem;
                    }
                    .category-text::after {
                        content: '>';
                        font-size: .5rem;
                        position: relative;
                        left: .2rem;
                        bottom: .125rem;
                    }
                    .name-text {
                        font-size: .9rem;
                        font-weight: 300;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .bottom-text {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid lightgrey;
                        font-size: .75rem;
                        padding-top: 1rem;
                        margin-bottom: 0;
                        position: relative;
                        .hours::before {
                            content: '\1F551';
                            position: relative;
                            right: .25rem;
                        }
                        .price {
                            font-weight: 300;
                        }
                        .old-price {
                            top: 5px;
                            right: 0;
                            position: absolute;
                            text-decoration: line-through;
                            font-size: .6rem;
                        }
                    }

                }
            }
        }
    }
}

.active {
    padding: .5rem 1rem;
    background-color: lightcyan;
    border-radius: 2rem;
}
</style>