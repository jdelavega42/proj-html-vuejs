<script>
import { store } from '../store';

export default {
    name: "AppFooter",
    props: {
        pages: Array
    },
    methods: {
        getImage(element){
            return new URL(`../assets/images/${element.img}`, import.meta.url).href;
        }
    },
    data() {
        return {
            store,
            blog: [
                {
                    img: 'photo-1517520287167-4bbf64a00d66-150x150.jpeg',
                    description: 'Our main target is to "developing Yourself as a Leader"',
                    date: 'August 9, 2018',
                },
                {
                    img: 'photo-1517520287167-4bbf64a00d66-150x150.jpeg',
                    description: 'Those Other College Expenses You Aren\'t Thinking About',
                    date: 'June 3, 2015',
                }
            ]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container-green d-flex row-cols-4 py-5">
            <div class="col">
                <h4>About</h4>
                <p><a href="#">Masterstudy</a> is Education Wordpress theme featured by Learning Management System (LSM) for online education. <br> Developed by <a href="#">JDeveloper</a></p>
                <ul class="p-0">
                    <template v-for="link in this.store.externalLinks">
                        <li v-if="link.onFooter" class="d-inline px-1 ms_grey"> <i :class="link.icon"></i></li>
                    </template>
                </ul>
            </div>
            <div class="col">
                <h4>Contact</h4>
                <address>
                    <p>USA,California 20, First Avenue. <br> California</p>
                    <p>Tel.: +1 212 459 300 32 <br> Fax.: +1 212 375 24 14</p>
                    <p class="secondary-text ms_grey">info@masterstudy.com</p>
                </address>
            </div>
            <div class="col">
                <h4>Pages</h4>
                <ul class="row row-cols-2 dotted">
                    <li v-for="page in pages" class="col"> {{ page }}</li>
                </ul>
            </div>
            <div class="col">
                <h4>Blog</h4>
                <ul class="p-0">
                    <li v-for="(article, index) in blog" :key="index" class="d-flex gap-1">
                        <img :src="getImage(article)" alt="" class="w-25 squared">
                        <div class="info w-75">
                            <p class="text-wrap"> {{ article.description }} <br>
                                <span class="secondary-text">-{{ article.date }}</span>
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
            
        </div>
        
    </footer>
</template>

<style lang="scss" scoped>
.container-green {
    .col {
        h4 {
            font-size: 1.25rem;
        }
        p {
            font-size: .8rem;
        }
        .secondary-text {
            font-size: .75rem;
        }
        .dotted {
            list-style: disc;
        }
        img {
            height: 100%;
        }
        .ms_grey {
            color: lightgray;
        }
    }
}
</style>