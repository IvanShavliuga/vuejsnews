<template>
<form class="form-signin">
  <div class="header__logo text-center">
            <h1 class="header__logo__title"><span>N</span><span>e</span><span>w</span><span>s</span> 
            <span>p</span><span>o</span><span>r</span><span>t</span><span>a</span><span>l</span></h1>
  <p class="signparagraph">
      Vue.js news portal
  </p> 
        </div>
  <div class="form-label-group signelem">
    <label for="inputLogin">Login</label>
    <input type="login" id="inputLogin" class="form-control" placeholder="Login" required autofocus v-model="login">
  </div>

  <div class="form-label-group signelem">
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
  </div>
  <button class="btn btn-lg btn-primary btn-block btn-sign" @click.prevent="signinfun">Sign in</button>
</form>


</template>
<style lang="scss">
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .signelem {
         color:white;      
      }
      .signparagraph {
         color:#e0e;      
      }
      .btn-sign {
         margin-top: 25px;       
      }
      .form-signin {
         margin-top: 60px!important;      
      }
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      .form-signin {
          width: 300px!important; 
          margin:auto;   
      }       
       
</style>
<script>
export default {
   data() {
       return {
           login:'',
           password:'',
           regdata: {
              status:'',
              error:false,
              user:{}
           }         
       }   
   },
   props: {
       users: {
          type: Array,
          required: true       
       }   
   },
   methods: {
       signinfun() {
           if(this.login === '') {
               this.regdata.status = 'Empty login';
               this.regdata.error=true;
               this.regdata.user={};           
           }else {  
           console.log("Users: "+this.users);
           let usr = this.users.filter( (u) => {return u.login === this.login});
           console.log("usr "+usr[0]);
           if(usr[0]!==undefined) {
               if(usr[0].password===this.password) {
                     this.regdata.user=usr[0];
                     this.regdata.status="Success sign in";
                     this.regdata.error=false;  
                     console.log("OK")             
               }else{
                     this.regdata.user={};
                     this.regdata.status="Password invalid";
                     this.regdata.error=true;               
               }//else   
            }//if        
           }//else
           console.log("status: "+this.regdata.status)
           this.$emit("signin",this.regdata);       
       }   
   }
}

</script>