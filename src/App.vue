<template>
        <the-nav :page="currentPage" @changePage="currentPage = $event"></the-nav>

        <keep-alive> 
          <component :is="currentPage"></component>
        </keep-alive>
        
        <the-footer></the-footer>

</template>


<script>

  import TheNav from './components/layouts/TheNav.vue';
  import TheFooter from './components/layouts/TheFooter.vue';
  import { defineAsyncComponent } from 'vue';

  export default {
    components : {
        TheNav,
       TheFooter,
      'home-page' : defineAsyncComponent(() => import('./components/pages/HomePage.vue')) ,
      'contact-page' : defineAsyncComponent(() => import('./components/pages/ContactPage.vue')) ,
      'about-page' : defineAsyncComponent(() => import('./components/pages/AboutPage.vue'))  
    },
    data() {
      return {
        currentPage : 'home-page'
      }
    }
  }
</script>