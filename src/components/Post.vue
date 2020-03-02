<template>
  <article class="card mb-2">
  <div class="card-header">{{post.title}}</div>
  <div class="card-body">
  <h6 class="card-title"> 
  <span class='text-primary'>
  <i class="fa fa-user"></i>{{user.login}} {{post.date}} {{post.time}}</span></h6>
  <p class="card-text">{{post.desc}}</p></div>
  <div class="card-footer text-primary">
  <span><i class="fa fa-thumbs-up" @click="like(post)"></i>{{post.like.length}}</span> 
  <span><i class="fa fa-retweet" @click="repost(post)"></i>{{post.repost.length}}</span> 
  <span><i class="fa fa-eye"></i>{{post.views.length}}</span> 
  <hr>
  <i class="fa fa-tags"></i>
  <span v-for="(c,kc) in post.cat" :key="kc">{{c+" "}}</span>
  <!--<hr>
  <span @click="predisplay=!predisplay" class="debug">Debug</span>
  <pre v-if="predisplay">
  <span class="pre-header">DEBUG MODE:</span>
  loginid: <b>{{loginid}}</b> 
  likes (id): <b>{{post.like}}</b>
  reposts (id): <b>{{post.repost}}</b>
  </pre>-->
  </div>
   </article>
</template>
<style lang="scss">
  
  .card {
    max-width: 17rem!important; 
    margin:5px!important;
     &-title {
       padding: 5px;
       line-height:10px;
              
    }
    &-header{
      font-weight: bold!important;
      color: #93f!important;
    }
    &-footer {
      span {
          padding-right: 6px; 
               
      }  
      span:hover {
          color:red;      
      }
      /*.debug{
          cursor:pointer;
          color:red;
          font-weight:bold;      
      }
      pre {
          background:#ccc; 
          line-height:14px; 
          font-size:10px; 
          border:1px solid #555;
          padding: 5px;
          margin: 5px; 
          b{
             font-size:10px;
             line-height:14px;          
          }   
          .pre-header {
             color: red;
             font-size: 14px;
             text-align: center;
             text-decoration:underline;           
          }
      }*/
    }
    &-body {
       span {
          padding-left: 4px;
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
       },
       loginid: {
           type: Number,
           required: true        
       }
    },
    data() {
       return {
           predisplay:false       
       }
    },
    methods:{            
        like(post){
           this.$store.dispatch("likepost",post)
        },
        repost(post){
           this.$store.dispatch("repost",post)
        }
    }    
}
</script>