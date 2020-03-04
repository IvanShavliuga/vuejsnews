<template>
<div class="content"> 
<div class="row">
   <app-post v-for="(n,k) in posts" 
             :post="n" :key="k" 
             :user="users[n.userId]" 
             :loginid="loginid" 
             :admingroups="admingroups">
   </app-post>
</div>
</div>
</template>
<style>]

 .content {
      padding: 10px!important;
      background: #eee;
  }
</style>
<script>
import Post from './Post.vue';
export default {
   props: {
      posts:{
         type: Array,
         required: true
      },
      users:{
         type: Array,
         required: true    
      },
      loginid:{
         type:Number,
         required:true
      },
      admingroups: {
         type:Array,
         required:true      
      }    
   },
    components: {
        appPost: Post    
    } 
}
</script>