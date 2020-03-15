<template>
<main>
   <section class="content">
      <div class="row">
          <article class="card mb-2 block" v-for="(u,k) in users" :key="k">
          <div class="card-header">{{u.name}}</div>
          <div class="card-body">
          <h6 class="card-title">{{u.rang}}</h6>
          <div class="card-text">
          <img :src="u.avatar" class="avatar" width="80" height="80">
          <p>{{u.gender}}, {{u.age}}</p>
          <p>{{u.spec}}</p>
          <p>{{u.city}}</p>
          <p><span v-for="(s,k) in u.skills" :key="k">{{s}} </span></p>
          <p>Friends: {{(u.friends.length>1)?(u.friends.length-1):'not friends'}}</p> 
          </div> <!--card-text-->
          
          </div>
          <div class="card-footer">
          <span class='text-primary login-user'>@{{u.login}}</span>  
          <span v-if="friendscheck(u)" class="friend">{{(u.id===loginid)?('You'):('Friend')}}</span>
          <span v-else @click="addfriend(u)" class="friend">Add friend</span>
          </div><!--card-footer-->
          </article>
      </div>
   </section>
</main>
</template>
<style lang="scss">
  .block {
    width: 17rem;
    min-height: 80px;  
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
    p {
       margin: 5px;          
    }
    .avatar {
       width:80!important;
       height:80!important;
       border-radius:50%;    
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
        },
        addfriend(u) {
           this.$store.dispatch("addfriend",u);        
        }
    },
    created() {
        this.users=this.$store.getters.users;
        this.loginid=this.$store.getters.loginid;    
    }
}

</script>