<template>
<section>
<h3>Add new message</h3> 
<div class="card mb-2 msgadd" >
  <form>

  <div class="card-header"><input class="form-control" type="text" v-model="msg.title" placeholder="title"></div>
  <div class="card-body msg-body">
  <p class="card-text"><textarea class="form-control" cols="50" rows="7"  v-model="msg.body">text</textarea>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="groups">Users</label>
  </div>
  <select class="custom-select" id="groups" v-model="msg.to"  placeholder="users"> 
    <option v-for="(fid,k) in friends" :value="fid.id" :key="k" :default="msg.to===fid.id">{{fid.name}}</option>
  </select>
  </div>
 
  </p></div>  
  <div class="card-footer">
      <button class="btn btn-outline-success my-2 my-sm-0" @click="sendmsg">Send message</button>
  </div> 
  </form>
   </div>
</section>
</template>
<style lang="scss">
  section div.msgadd{
      min-width:35rem!important;
      height:320px!important;
  }
</style>
<script>
export default {
    data() {
        return {
            msg: {
                title:"title",
                body:"body",
                id:0,
                to:1,
                from:0,
                groupId:-1,
                type:"user",
                read:false,
                show:false            
            }        
        }    
    },
    props:{
        friends: {
            type: Array,
            required: true        
        },
        userloginid: {
            type: Number,
            required:true        
        }    
    },
    methods: {
        sendmsg() {
           let msgsend={title:this.msg.title,
                body:this.msg.body,
                id:0,
                to:this.msg.to,
                from:this.userloginid,
                groupId:-1,
                type:"user",
                read:false,
                show:false};
           this.$store.dispatch("addmessage",msgsend);
           this.$emit("addmessage");        
        }    
    }
}      
</script>