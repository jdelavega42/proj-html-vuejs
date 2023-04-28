<script>
import { store } from '../store';
export default {
    name: "AppHeader",
    data() {
        return {
            store,
            pages: [
                {
                    name: 'Courses',
                    isNew: false
                },
                {
                    name: 'Zoom',
                    isNew: true
                },
                {
                    name: 'Pages',
                    isNew: false
                },
                {
                    name: 'Bundle',
                    isNew: false
                },
                {
                    name: 'Course Formats',
                    isNew: false
                },
                {
                    name: 'AddCourse',
                    isNew: true
                },
                {
                    name: 'Demos',
                    isNew: false
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="ms_container-md">
            <div>
                <span>English</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="ms_lists">
                <ul>
                    <li v-for="(page, index) in pages" :key="index" :class="{'active': page.isNew}">{{ page.name }}</li>
                </ul>
                <ul>
                    <template v-for="link in this.store.externalLinks">
                        <li v-if="link.onHeader"> <i :class="link.icon"></i></li>
                    </template>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.ms_container-md {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-weight: 200;
}
.ms_lists {
    display: flex;
    align-content: center;
    ul {
        display: flex;
        margin-left: 2rem;
        li {
            position: relative;
            padding: 0 .25rem;
        }
        .active::after {
            content: 'NEW';
            position: absolute;
            top: -1ch;
            right: 0; 
            background-color: red;
            color: white;
            font-size: .5rem;
            font-weight: 500;
            padding: 0 .25rem;
        }
    }
}
</style>