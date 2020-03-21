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
  <ul><li><span v-if="g.followers.length"><i class="fa fa-user"></i> {{g.followers.length}}</span></li> 
  <li v-for="(f,k) in filterFollowers(g)" :key="k"><img :src="users[f].avatar" :title="(f===loginid)?'You':(users[f].name)"></li></ul>
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
    ul {
     display: flex;
     margin:0;
     padding: 0;
     li {
        list-style:none;
        margin:0;
        img {
            width: 25px;
            height: 25px;        
            border-radius:50%;
            margin-right: 5px;
        }     
     }   
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
        },
     filterFollowers(g){
         let fl = [];
         if(g.followers.length <= 4)
            fl=g.followers;
         else {
           for(let i=0; i<4; i++) {
              
              fl.push(g.followers[i]);           
           }   
         }
         return fl;     
     }    
   },
    created() {
        this.groups = this.$store.getters.groups; 
        this.users = this.$store.getters.users;
        this.loginid = this.$store.getters.loginid;     
    }

}

</script>