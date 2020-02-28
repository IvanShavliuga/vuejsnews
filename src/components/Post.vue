<template>
  <div class="card mb-2">
  <div class="card-header">{{post.title}}</div>
  <div class="card-body">
  <h6 class="card-title">{{post.type}}: 
  <span class='text-primary'>
  <i class="fa fa-user"></i>{{user.login}} {{post.date}} 
  {{post.time}}</span></h6>
  <p class="card-text">{{post.desc}}</p></div>
  <div class="card-footer text-primary">
  <span><i class="fa fa-thumbs-up"></i>{{post.like.length}}</span> 
  <span><i class="fa fa-retweet"></i>{{post.repost.length}}</span> 
  <span><i class="fa fa-eye"></i>{{post.views.length}}</span> 
  <hr>
  <i class="fa fa-tags"></i>
  <span v-for="(c,kc) in post.cat" :key="kc">{{c+" "}}</span>
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
    .card-footer {
      span {
          padding-right: 15px;      
      }  
      span:hover {
          color:red;      
      }
    }
    .card-body {
       span {
          padding-left: 7px;
          i { 
             padding-right: 7px;
          }   
       }   
       span:hover {
          color:red;      
      } 
    }
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