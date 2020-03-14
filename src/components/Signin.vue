<template>
<form class="form-signin">
  <div class="text-center mb-4">
    <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
    <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
  </div>

  <div class="form-label-group">
    <input type="login" id="inputLogin" class="form-control" placeholder="Login" required autofocus v-model="login">
    <label for="inputLogin">Login</label>
  </div>

  <div class="form-label-group">
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
    <label for="inputPassword">Password</label>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" @click.prevent="signinfun">Sign in</button>
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2020</p>
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