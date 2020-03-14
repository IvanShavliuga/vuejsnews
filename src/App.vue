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
       <app-signin :users="users" @signin="signinfun" v-if="!registration"></app-signin>
       <app-signup @signup="signupfun" :users="users" v-else></app-signup>
       <p class="signlink" @click="registration=!registration" :title="(!registration)?'Sign up':'sign in'">{{(!registration)?'Sign up':'sign in'}}</p>
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
     text-align:center;  
  }
  .content{
     padding: 15px;
     background: #eee;
  }
  .signlink{
     color:#fff;
     cursor:pointer;  
  }
</style>
<script>
  import Header from './components/Header.vue';
  import Signin from './components/Signin.vue';
  import Footer from './components/Footer.vue';
  import Signup from './components/Signup.vue';


  export default {
     data() {
         return {
              title: "iv2news",
              userlogin: false,
              registration:false,
              users:[]         
         } 
     },
     components:{
         appHeader: Header,
         appSignin: Signin,
         appSignup: Signup,
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
         },
         signupfun(rd) {
             if(!rd.error) {
                console.log("rd.user "+rd.user)
                this.$store.dispatch("signup",rd.user);
                this.userlogin=true;             
             }
         }        
     }   
  }

</script>