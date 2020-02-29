<template>
  <div class="content">   
     <router-view></router-view> 
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
     data() {
         return {
              user:{},
              posts:[],
              cards:[],
              messages:[],
              alert:{},
              users:[],
              userlogin:true     
         } 
     },
     components:{
         appNews: News,
         appCards: Cards,
         appAlert: Alert     
     },
     created() {       
         this.posts = this.$store.getters.postsAll;
         this.cards = this.$store.getters.cards;
         this.users = this.$store.getters.users;
         this.alert = this.$store.getters.alert;
     }     
  }

</script>