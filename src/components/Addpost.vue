<template>
<div class="card mb-2 addpost">
  <form>
  <div class="form-group">
  <div class="card-header"><input class="form-control" type="text" v-model="post.title"></div>
  <div class="card-body">
  <p class="card-text"><textarea class="form-control" cols="50" rows="7"  v-model="post.desc"></textarea></p></div>
  
  <div class="card-footer"><div class="input-group mb-3"><input class="form-control" type="text" v-model="catnew">
  <div class="input-group-append">
  <button class="btn btn-primary" @click="addcat"><i class="fa fa-plus"></i></button> 
  </div>
  </div>
  <hr>
  <i class="fa fa-tags"></i>
  <span v-for="(c,kc) in post.cat" :key="kc">{{c+" "}}</span>
  <button class="btn btn-outline-success my-2 my-sm-0 sendbutton" @click="sendpost">Send post</button>
  </div>
  </div>
  </form>
   </div>
</template>
<style lang="scss">
.addpost {
   max-width:35rem!important;
   
}
</style>
<script>
export default {
   data() {
       return {
           post: {
               title:"",
               userId:0,
               date:"1.1.21",
               time:"0:0:0",
               desc:"",
               cat:[],
               like:[],
               repost:[],
               views:[],
               groupId:0,
               likeclick:false,
               type:"post"
           },
           catnew:""       
       }   
   },
   methods: {
       addcat() {
           if(this.catnew.length) 
              this.post.cat.push(this.catnew);       
       },
       sendpost() {
           this.$store.dispatch("addpost",this.post);       
       }
   }
}
</script>
