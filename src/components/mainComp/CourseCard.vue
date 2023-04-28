<script>
    export default {
        name: "CourseCard",
        props: {
            course: Object
        },
        methods: {
            getImage(element){
                return new URL(`../../assets/images/${element.img}`, import.meta.url).href;
            }
        }
    }
</script>

<template>
    <div class="mc_wrapper">
        <img :src="getImage(course)" alt="">
        <span v-if="course.promo" :class="course.promo">{{ course.promo }}</span>
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
</template>

<style lang="scss" scoped>
.featured {
    position: absolute;
    border-bottom: 26px solid orange;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 100px;
    transform: rotate(-45deg);
    top: 13px;
    left: -25px;
    font-size: 0.6rem;
    color: white;
    text-transform: uppercase;
}
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
        z-index: -2;
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
</style>