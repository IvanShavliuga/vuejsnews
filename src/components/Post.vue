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
  <span><i class="fa fa-thumbs-up" @click="like(post.id)"></i>{{post.like.length}}</span> 
  <span><i class="fa fa-retweet" @click="repost(post.id)"></i>{{post.repost.length}}</span> 
  <span><i class="fa fa-eye"></i>{{post.views.length}}</span> 
  <hr>
  <i class="fa fa-tags"></i>
  <span v-for="(c,kc) in post.cat" :key="kc">{{c+" "}}</span>
  <pre>
     DEBUG MODE:
     loginid: {{loginid}} 
     likes (id): {{post.like}}
     reposts (id): {{post.repost}}
  </pre>
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
       },
       loginid: {
           type: Number,
           required: true        
       }
    },
    methods:{            
        like(id){
           let  lu  = this.post.like.filter((idl)=>{return idl===this.loginid});
           if(lu[0]!==undefined)
              this.post.like = this.post.like.filter((idl) => {return idl !==this.loginid});
           else 
              this.post.like.push(this.loginid) 
        },
        repost(id){
           let  lu  = this.post.repost.filter((idl)=>{return idl===this.loginid});
           if(lu[0]!==undefined)
              this.post.repost = this.post.repost.filter((idl) => {return idl !==this.loginid});
           else 
              this.post.repost.push(this.loginid) 
        }
    },    
}
</script>