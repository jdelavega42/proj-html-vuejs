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
        <div class="container-blue d-flex justify-content-between py-2">
            <div class="left d-flex">
                <p>English</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="right d-flex align-content-center">
                <ul class="d-flex px-4">
                    <li v-for="(page, index) in pages" :key="index" class="px-1" :class="page.isNew ? 'active':''">{{ page.name }}</li>
                </ul>
                <ul class="d-flex">
                    <template v-for="(link , index) in this.store.externalLinks" :key="index" >
                        <li v-if="link.onHeader" class="px-1"> <i :class="link.icon"></i></li>
                    </template>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.right {
    li {
        position: relative;
    }
    .active::after {
        content: 'NEW';
        position: absolute;
        top: -1ch;
        right: 0; 
        background-color: red;
        color: white;
        font-size: .5rem;
        padding: 0 .25rem;
    }
}
</style>