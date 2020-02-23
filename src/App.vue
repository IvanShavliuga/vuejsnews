<template>
  <div class="container">
     <div v-if="userlogin"> 
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
     </div> 
     <div v-else>
        <app-signin></app-signin>
     </div>
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
         appFooter: Footer     
     }   
  }

</script>