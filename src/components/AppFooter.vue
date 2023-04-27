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
        <div class="ms_container-sm">
            <div class="ms_col">
                <h4>About</h4>
                <p><a href="#">Masterstudy</a> is Education Wordpress theme featured by Learning Management System (LSM) for online education. <br> Developed by <a href="#">JDeveloper</a></p>
                <ul class="p-0">
                    <template v-for="link in this.store.externalLinks">
                        <li v-if="link.onFooter" class="d-inline px-1 ms_grey"> <i :class="link.icon"></i></li>
                    </template>
                </ul>
            </div>
            <div class="ms_col">
                <h4>Contact</h4>
                <address>
                    <p>USA,California 20, First Avenue. <br> California</p>
                    <p>Tel.: +1 212 459 300 32 <br> Fax.: +1 212 375 24 14</p>
                    <p class="ms_secondary-text ms_grey">info@masterstudy.com</p>
                </address>
            </div>
            <div class="ms_col">
                <h4>Pages</h4>
                <ul class="ms_list">
                    <li v-for="page in pages" class="ms_item"><p>{{ page }}</p></li>
                </ul>
            </div>
            <div class="ms_col">
                <h4>Blog</h4>
                <ul>
                    <li v-for="(article, index) in blog" :key="index" class="ms_blog">
                        <img :src="getImage(article)" alt="" class="ms_img">
                        <div class="ms_text">
                            <p class="text-wrap"> {{ article.description }} <br>
                                <span class="ms_secondary-text">-{{ article.date }}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </footer>
</template>

<style lang="scss" scoped>
.ms_container-sm {
    display: flex;
    gap: 1rem;
    padding: 2rem 0;
    .ms_col {
        width: 25%;
        p {
            font-size: .8rem;
        }
        .ms_secondary-text {
            font-size: .75rem;
        }
        .ms_grey {
            color: gray;
        }
        .ms_list {
            display: flex;
            flex-wrap: wrap;
            .ms_item {
                width: 50%;
                position: relative;
                left: 1ch;
                &::before {
                    content: '\00B7';
                    position: absolute;
                    left: -1ch;
                    top: calc(-1ch / 3);
                }
            }
        }
        .ms_blog {
            display: flex;
            gap: .5rem;
            .ms_img {
                width: 30%;
                height: 100%;
            }
            .ms_text {
                width: 70%;
            }
        }
    }
}
</style>