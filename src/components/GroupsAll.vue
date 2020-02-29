<template>
<div class="content"> 
 <div class="row">
  <div class="card mb-2" v-for="(g,k) in groups" :key="k">
  <div class="card-header">{{g.name}}</div>
  <div class="card-body">
  <p class="card-text">{{g.desc}}</p>
  
  </div>
  <div class="card-footer"><span class='text-primary'>
  <span>
  <i class="fa fa-tags"></i>{{g.category}}</span> 
  <span><i class="fa fa-user"></i>{{g.followers.length}}</span> 
  <span>Admin: @{{users[g.idAdmin].login}}</span>
 
  </span>
  </div>
   </div>
 </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            groups: [],
            users:[]
        };
    },
    created() {
        this.groups = this.$store.getters.groups; 
        this.users = this.$store.getters.users;     
    }

}

</script>