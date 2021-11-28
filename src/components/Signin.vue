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
      @media (max-width: 300px) {
        .form-signin {
           width: 200px!important;         
        }
      }     
       
</style>
<script>
export default {
   data() {
       return {
           login:'',
           password:''
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
           this.$store.dispatch("signin", { login: this.login, password: this.password }).then((d) => {
             this.$emit("signin", d)
             this.$store.dispatch('fetchAll').then((r) => {
			 setTimeout(() => this.$router.push('/profile'), 1000)
			}) 
			});
           // this.$emit("signin", {auth: true});       
       }   
   },
   created () {
	this.$router.push('/')
   }
}

</script>
