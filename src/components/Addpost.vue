<template>
<section>
<h3>Add new post</h3> 
<div class="card mb-2 addpost">
  <form>
  <div class="form-group">
  <div class="card-header"><input class="form-control" type="text" v-model="post.title" placeholder="title"></div>
  <div class="card-body">
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="groups">Groups</label>
  </div>
  <select class="custom-select" id="groups" v-model="post.groupId"  placeholder="groups">
    <option v-for="(gid,k) in admingroups" :value="gid.id" :key="k">{{gid.name}}</option>
  </select>
</div>
  <p class="card-text"><textarea class="form-control" cols="50" rows="7"  v-model="post.desc">text</textarea></p></div>
  <div class="input-group mb-3"><input class="form-control" type="text" v-model="catnew"  placeholder="title">
  <div class="input-group-append">
  <button class="btn btn-primary" @click="addcat"><i class="fa fa-plus"></i></button> 
  </div>
  </div>
  <div class="card-footer">
  <i class="fa fa-tags"></i>
  <span v-for="(c,kc) in post.cat" :key="kc">{{c+" "}}</span><hr>
  <button class="btn btn-outline-success my-2 my-sm-0 sendbutton" @click="sendpost">Send post</button>
  </div>
  </div>
  </form>
   </div>
</section>
</template>
<style lang="scss">
.addpost {
   max-width:35rem!important;
   
}
</style>
<script>
import Alert from './Alert.vue';
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
           alert:{
               header: "Add post",
               body:"This post added",
               status:"Success"   
           },
           catnew:""      
       }   
   },
   props:{
       admingroups: {
          type:Array,
          required:true       
       }
   },
   methods: {
       addcat() {
           if(this.catnew.length) 
              this.post.cat.push(this.catnew);       
       },
       sendpost() {
           this.$store.dispatch("addpost",this.post);
           this.addflag=true; 
           this.$emit("add");      
       }
   },
   components:{
       appAlert: Alert   
   }
}
</script>
