<template>
  <div class="container">
     <app-header></app-header>
     <div class="content">
      <router-view></router-view>
     </div> 
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
  .content {
     padding: 15px;
     background: #eee;
  }
</style>
<script>
  import Header from './components/Header.vue';
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
         appSignin: Signin,
         appFooter: Footer   
     }   
  }

</script>