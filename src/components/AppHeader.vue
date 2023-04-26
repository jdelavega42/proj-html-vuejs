<script>
export default {
    name: "AppHeader",
    data() {
        return {
            pages: ['Courses', 'Zoom', 'Pages', 'Bundle', 'Course Formats', 'Add Course', 'Demos'],
            links: [
                'fa-brands fa-twitter',
                'fa-brands fa-instagram',
                'fa-regular fa-basketball',
                'fa-brands fa-discord',
                'fa-brands fa-git',
                'fa-brands fa-linkedin',
                'fa-brands fa-pinterest'
            ]
        }
    }
}
</script>

<template>
    <header>
        <div class="container-blue d-flex justify-content-between">
            <div class="left">
                <span>English</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="right d-flex">
                <ul>
                    <li v-for="(page, index) in pages" :key="index" class="d-inline px-1">{{ page }}</li>
                </ul>
                <ul>
                    <li v-for="(link, index) in links" :key="index" class="d-inline px-1"> <i :class="link"></i></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>