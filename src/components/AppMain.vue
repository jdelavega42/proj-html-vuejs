<script>
import MainFront from './mainComp/MainFront.vue';
import MainSlogan from './mainComp/MainSlogan.vue';
import MainRecent from './mainComp/MainRecent.vue';
import MainNumbers from './mainComp/MainNumbers.vue';
import MainSub from './mainComp/MainSub.vue';
import MainPopular from './mainComp/MainPopular.vue';
import MainCTA from './mainComp/MainCTA.vue';
import MainFeed from './mainComp/MainFeed.vue';
export default {
    name: "AppMain",
    components: {
        MainFront,
        MainSlogan,
        MainRecent,
        MainNumbers,
        MainSub,
        MainPopular,
        MainCTA,
        MainFeed
    },
    data() {
        return {
            courses:[
                {
                    img: 'photo-1461749280684-dccba630e2f6-544x322.jpeg',
                    category: 'Apache',
                    name: 'Web Coding and Apache Basics',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: 'Free',
                },
                {
                    img: 'cat_2-740x310.jpg',
                    category: 'Art',
                    promo: 'featured',
                    label: 'new',
                    name: 'Real Things Art Painting by Jason Ni',
                    hours: 6,
                    rating: null,
                    oldPrice: '60',
                    price: '$45',
                },
                {
                    img: 'course-preview-544x322.jpg',
                    category: 'Software Development',
                    label: 'hot',
                    name: 'Basic of Masterstudy',
                    hours: null,
                    rating: 5,
                    oldPrice: null,
                    price: 'Free',
                },
                {
                    img: 'photo-1517520287167-4bbf64a00d66-150x150.jpeg',
                    category: 'Electronic',
                    label: 'special',
                    name: 'How to be a DJ? Make Electronic Music',
                    hours: null,
                    rating: 5,
                    oldPrice: null,
                    price: '$49',
                },
                {
                    img: '',
                    category: 'Communication',
                    name: 'Design Instruments for Communication',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: '',
                },
                {
                    img: 'cathryn-lavery-67852-unsplash-544x322.jpg',
                    category: 'Art',
                    name: 'Make your Concept Right and Beautiful',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: '$70',
                },
                {
                    img: 'photo-1496307042754-b4aa456c4a2d-544x322.jpeg',
                    category: 'Bycycling',
                    name: 'Road Bike Manual or How to Be a Champion',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: '$20',
                },
                {
                    img: 'cristian-grecu-762012-unsplash-min-scaled-544x322.jpg',
                    category: 'Documentary',
                    name: 'How to Make Beautiful Landscape photos?',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: '$60',
                },
                {
                    img: 'landscape-544x322.jpg',
                    category: 'Art',
                    name: 'Let\'s paint Van Gogh\'s Starry Night',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: '$79',
                },
                {
                    img: '12345-1-544x322.png',
                    category: 'Nvidia',
                    label: 'special',
                    name: 'Nvidia and UE4 Technologies Practice',
                    hours: null,
                    rating: 5,
                    oldPrice: null,
                    price: 'Free',
                },
                {
                    img: 'jakob-owens-198234-unsplash-min-1-544x322.png',
                    category: 'Art',
                    label: 'special',
                    name: 'How to Work with Legendary RED camera',
                    hours: 6,
                    rating: null,
                    oldPrice: null,
                    price: 'Free',
                },
                {
                    img: 'promo_tf-544x322.jpg',
                    category: 'Software Development',
                    name: 'Masterstudy Mobile LMS App',
                    hours: 2,
                    rating: null,
                    oldPrice: null,
                    price: 'Free',
                }
            ]
        }
    }
}
</script>

<template>
    <main>
        <MainFront />
        <MainSlogan />
        <MainRecent />
        <MainNumbers />
        <MainSub />
        <MainPopular />
        <MainCTA />
        <MainFeed />
    </main>
</template>

<style lang="scss" scoped>
</style>