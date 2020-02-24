<template>
  <div class="container">
     <app-header></app-header>
     <keep-alive>
        <router-view></router-view>
     </keep-alive> 
     <app-footer></app-footer>
  </div>
</template>
<style lang="scss">
 body, div.container{
     background: #a0a!important;
  } 
  body,html {
     margin:0;
     padding:0;  
     height:100%;
  }
  .userlogin {
     margin:0;
     padding:0;
     height:100%;  
  }
</style>
<script>
  import Header from './components/Header.vue';
  import Content  from './components/Content.vue';
  import Signin from './components/Signin.vue';
  import Footer from './components/Footer.vue';
  import Profile from './components/Profile.vue';
  import {eventBus} from './main';
 

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