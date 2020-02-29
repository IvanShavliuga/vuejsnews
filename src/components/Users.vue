<template>
<main>
   <div class="content">
      <div class="row">
          <div class="card mb-2 block" v-for="(u,k) in users" :key="k">
          <div class="card-header">{{u.name}}<br></div>
          <div class="card-body">
          <h6 class="card-title">{{u.rang}}</h6>
          <p class="card-text">{{u.gender}}, {{u.age}}<br>{{u.spec}}<br>{{u.city}}<br>
          <span v-for="(s,k) in u.skills" :key="k">{{s}} </span><br>Friends: {{u.friends.length}}</p> 
          </div>
          <div class="card-footer"><span class='text-primary login-user'>
          @{{u.login}}</span> 
          </span>
          </div>
          </div>
          </div>
      </div>
   </div>
</main>
</template>
<style lang="scss">
  .block {
    width: 13rem;  
    span {
       color:#07b;    
    } 
    .login-user {
        font-size:14px;    
    }
  }
</style>
<script>
export default {
    data() {
        return {
            users:[]        
        }    
    },
    created() {
        this.users=this.$store.getters.users;    
    }
}

</script>