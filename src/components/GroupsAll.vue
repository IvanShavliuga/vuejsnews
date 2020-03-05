<template>
<div class="content"> 
 <div class="row">
  <div class="card mb-2 gblock" v-for="(g,k) in groups" :key="k">
  <div class="card-header">{{g.name}}</div>
  <div class="card-body">
  <p class="card-text">{{g.desc}}</p>
  </div>
  <div class="card-footer"><span class='text-primary'>
  <span v-if="g.category.length"><i class="fa fa-tags"></i>{{g.category}}</span><br>
  <span v-if="g.followers.length"><i class="fa fa-user"></i> {{g.followers.length}}</span> 
  <span class="admin-group">{{(g.idAdmin === loginid)?'You':('@'+users[g.idAdmin].login)}}</span>
  <span class="readyou" v-if="groupread(g)">You read</span>
  <span class="readyou" v-else @click="groupfollow(g)">Follow</span>
  
  </span> 
  </div>
   </div>
 </div>
 </div>
</template>
<style lang="scss">
  .gblock {
    width:17rem; 
    min-height: 300px; 
    max-height: 350px; 
    span {
       cursor: pointer;    
    }   
    .admin-group{
       color: red;
       font-weight:bold;
    } 
    .readyou{
       color:#d5d;
       font-weight:bold;   
    }
  }
</style>
<script>
export default {
    data() {
        return {
            groups: [],
            users:[],
            loginid:0
        };
    },
    methods:{
        groupread(g){
           let fl = g.followers.filter((gf)=>{return gf===this.loginid})
           return fl[0]!==undefined;
        },
        groupfollow(g) {
           this.$store.dispatch("groupfollow",g);         
        } 
    },
    created() {
        this.groups = this.$store.getters.groups; 
        this.users = this.$store.getters.users;
        this.loginid = this.$store.getters.loginid;     
    }

}

</script>