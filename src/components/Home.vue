<template>
<div>
     <app-alert :alert="alert"></app-alert>
     <app-cards :cards="cards"></app-cards>
     <app-news :posts="posts" :users="users" :loginid="loginid" :admingroups="admingroups"></app-news>
</div>
</template>
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
              alert:{},
              users:[], 
              admingroups:[],
              loginid:0   
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
         this.admingroups=this.$store.getters.groupsAdmin;
     }   
 }
</script>