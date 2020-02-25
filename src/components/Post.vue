<template>
  <div class="card mb-2">
  <div class="card-header">{{post.title}}</div>
  <div class="card-body">
  <h6 class="card-title">{{post.type}}: 
  <span class='text-primary'>
  {{user.login}}<br> 
  {{post.date}} 
  {{post.time}}</span></h6>
  <p class="card-text">{{post.desc}}</p>
  
  </div>
 
  <div class="card-footer"><span class='text-primary'>
  <span @click="liked(post.id)" :style='post.likeclick?"color:red":"color:blue"'>
  {{post.like}}</span> 
  <span @click="repostclick(post.id)">{{post.repost}}</span> 
  {{post.views}} 
  {{post.cat}}</span>
  </div>
   </div>
</template>
<style lang="scss">
  .card-header{
    font-weight: bold!important;
    color: #93f!important;  
  }
  .card {
    max-width: 18rem!important; 
    margin:5px!important;
  }
</style>
<script>
export default {
    props:{
       post: {
           type: Object,
           required: true     
       },
       user: {
           type: Object,
           required: true        
       }
    }    

}
</script>