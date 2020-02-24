<template>
<div>
     <div v-if="userlogin"> 
        <app-content></app-content>
     </div> 
     <div v-else>
        <app-signin></app-signin>
     </div>
</div>
</div>
</template>
<script>
  import Header from './Header.vue';
  import Content  from './Content.vue';
  import Signin from './Signin.vue';
  import Footer from './Footer.vue';
  import Profile from './Profile.vue';
  import {eventBus} from '../main';
 

  export default {
     data() {
         return {
              title: "iv2news",
              userlogin: true         
         } 
     },
     components:{
         appHeader: Header,
         appContent: Content,
         appSignin: Signin,
         appFooter: Footer,
         appProfile:  Profile     
     }   
  }

</script>