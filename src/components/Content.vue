<template>
  <div class="content"> 
     <app-alert :alert="alert"></app-alert>
     <app-cards :cards="cards" ></app-cards>
     <app-news :posts="posts" :users="users"></app-news>
  </div>  
</template>
<style lang="scss">
  .content {
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
     props: {
       alert: {
           type: Object,
           required: true     
       },
       posts:{
           type: Array,
           required: true       
       },
       cards:{
           type: Array,
           required: true       
       },
       users:{
           type:Array,
           required: true       
       }     
    },
    data() {
         return {
              title: "iv2news",
              /*alert: {
                  header: "Test",
                  body:"This alert window created for tests",
                  status:"Test OK"              
              }*/         
         } 
     },
     components:{
         appNews: News,
         appCards: Cards,
         appAlert: Alert     
     }   
  }

</script>