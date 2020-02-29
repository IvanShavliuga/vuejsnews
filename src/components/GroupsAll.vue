<template>
<div class="content"> 
 <div class="row">
  <div class="card mb-2 gblock" v-for="(g,k) in groups" :key="k">
  <div class="card-header">{{g.name}}</div>
  <div class="card-body">
  <p class="card-text">{{g.desc}}</p>
  </div>
  <div class="card-footer"><span class='text-primary'>
  <span><i class="fa fa-user"></i> {{g.followers.length}}</span> 
  <span class="admin-group">{{(g.idAdmin === loginid)?'You':('@'+users[g.idAdmin].login)}}</span>
  <span class="readyou" v-if="groupread(g)">You read</span><br>
  <span><i class="fa fa-tags"></i>{{g.category}}</span>
  </span> 
  
  </div>
   </div>
 </div>
 </div>
</template>
<style lang="scss">
  .gblock {
    width:17rem;  
  }
  .admin-group{
     color: red;
     font-weight:bold;
      
  } 
  .readyou{
     color:#d5d;
     font-weight:bold;   
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
        } 
    },
    created() {
        this.groups = this.$store.getters.groups; 
        this.users = this.$store.getters.users;
        this.loginid = this.$store.getters.loginid;     
    }

}

</script>