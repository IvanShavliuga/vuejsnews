<template>
  <main>
     <app-alert></app-alert>
     <app-cards></app-cards>
     <app-news></app-news>
  </main>  
</template>
<style lang="scss">
  main {
      padding: 10px;
      background: #eee;
  }
</style>
<script>
  import News from './News.vue';
  import Cards  from './Cards.vue';
  import Alert from './Alert.vue';
  import {eventBus} from '../main';
   

  export default {
     data() {
         return {
              title: "iv2news"         
         } 
     },
     components:{
         appNews: News,
         appCards: Cards,
         appAlert: Alert     
     }   
  }

</script>