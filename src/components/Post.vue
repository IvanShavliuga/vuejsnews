<template>
  <div class="card mb-2" style="max-width: 18rem; margin:5px">
  <div class="card-header">{{post.title}}</div>
  <div class="card-body">
  <h6 class="card-title">{{post.type}}: 
  <span class='post-status'>
  {{post.user}}<br> 
  {{post.date}} 
  {{post.time}}</span></h6>
  <p class="card-text">{{post.desc}}</p>
  
  </div>
 
  <div class="card-footer"><span class='post-status'>
  <span @click="liked(post.id)" :style='post.likeclick?"color:red":"color:blue"'>
  {{post.like}}</span> 
  <span @click="repostclick(post.id)">{{post.repost}}</span> 
  {{post.views}} 
  {{post.cat}}</span>
  </div>
   </div>
</template>
<style lang="scss">

</style>
<script>
export default {
    props:{
       post: {
           type: Object,
           required: true     
       }
    }    

}
</script>