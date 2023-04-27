<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
      return {
          pages: ['Blog', 'Courses', 'Home', 'Membership', 'Shortcodes', 'Typography' ]
      }
  }
}

</script>

<template>
<AppHeader />
<AppMain />
<AppFooter :pages="pages"/>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
