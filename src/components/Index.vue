<template>
<main>
     <div v-if="userlogin"> 
        <app-content 
           :news="news"
           :cards="cards"
           :alert="alert"></app-content>
     </div> 
     <div v-else>
        <app-signin></app-signin>
     </div>
</main>
</template>
<script>
  import Content  from './Content.vue';
  import Signin from './Signin.vue';
  import {eventBus} from '../main';
 

  export default {
     data() {
         return {
              user:{},
              posts:[],
              cards:[],
              messages:[],
              alert:{},
              userlogin:true     
         } 
     },
     components:{
         appContent: Content,
         appSignin: Signin   
     },
     created() {
        
         this.posts = this.$store.getters.posts;
         this.cards = this.$store.getters.cards;
         
         this.alert = this.$store.getters.alert;
     }   
  }

</script>