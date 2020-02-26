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
  {{g.category}}</span> 
  <span>{{g.followers.length}}</span> 
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
            groups: []
        };
    },
    created() {
        this.groups = this.$store.getters.groups;   
    }

}

</script>