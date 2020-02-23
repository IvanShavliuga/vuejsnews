<template>
  <main>
     <app-alert></app-alert>
     <app-cards></app-cards>
     <app-post></app-post>
  </main>  
</template>
<style lang="scss">
  main {
      padding: 10px;
      background: #eee;
  }
</style>
<script>
  import Post from './Post.vue';
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
         appPost: Post,
         appCards: Cards,
         appAlert: Alert     
     }   
  }

</script>