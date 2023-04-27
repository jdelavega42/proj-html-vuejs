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