<template>
<main>
   <div class="content">
      <div class="row">
          <div class="card mb-2 block" v-for="(u,k) in users" :key="k">
          <div class="card-header">{{u.name}}</div>
          <div class="card-body">
          <h6 class="card-title">{{u.rang}}</h6>
          <p class="card-text">{{u.gender}}, {{u.age}}<br>{{u.spec}}<br>{{u.city}}<br>
          <span v-for="(s,k) in u.skills" :key="k">{{s}} </span><br>Friends: {{u.friends.length}}</p> 
          </div>
          <div class="card-footer"><span class='text-primary login-user'>
          @{{u.login}}</span>  <span v-if="friendscheck(u)" class="friend">{{(u.id===loginid)?('You'):('Friends')}}</span>
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
    width: 17rem;  
    span {
       color:#07b;    
    } 
    .login-user {
        font-size:14px;    
    }
    .friend {
        color:red;
        font-weight: bold;            
    }
  }
</style>
<script>
export default {
    data() {
        return {
            users:[],
            loginid:0        
        }    
    },
    methods:{
        friendscheck(u){
           let f = u.friends.filter((fr)=>{return fr===this.loginid});
           return f[0]!==undefined;       
        }
    },
    created() {
        this.users=this.$store.getters.users;
        this.loginid=this.$store.getters.loginid;    
    }
}

</script>