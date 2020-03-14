<template>
  <div class="container">
    <div v-if="userlogin">
     <app-header></app-header>
     <div class="content">
      <router-view></router-view>
     </div> 
     <app-footer></app-footer>
    </div>
    <div v-else class="userlogin">
       <app-signin :users="users" @signin="signinfun"></app-signin>
    </div>
  </div>
</template>
<style lang="scss">
  body, div.container{
     background: #808!important;
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
  .content{
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
              userlogin: false,
              users:[]         
         } 
     },
     components:{
         appHeader: Header,
         appSignin: Signin,
         appFooter: Footer   
     },
     created() {
         this.users = this.$store.getters.users;              
     },
     methods:{
         signinfun(rd) {
             if(!rd.error) {
                this.$store.dispatch("signin",rd.user);
                this.userlogin=true;             
             }
         }     
     }   
  }

</script>