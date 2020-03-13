<template>
<div>
     <app-alert :alert="alert" @close="closealert" v-if="alertflag"></app-alert>
     <app-cards :cards="cards" :index=index></app-cards>
     <app-news :posts="posts" :users="users" :loginid="loginid" :admingroups="admingroups" :groups="groups" :comments="comments"></app-news>
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
              alertflag:true,
              users:[],
              groups:[], 
              admingroups:[],
              comments:[],
              loginid:0,
              index:0  
         } 
     },
     components:{
         appNews: News,
         appCards: Cards,
         appAlert: Alert     
     },
     methods: {
         closealert(){
            this.alertflag=false;
         }
     },
     created() {       
         this.posts = this.$store.getters.postsAll;
         this.cards = this.$store.getters.cards;
         this.users = this.$store.getters.users;
         this.alert = this.$store.getters.alert;
         this.admingroups=this.$store.getters.groupsAdmin;
         this.groups = this.$store.getters.groups;
         this.comments = this.$store.getters.comments;
     }   
 }
</script>