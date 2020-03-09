<template>
<section>
 <h3>Messages</h3> 
 <p><table class="table">
 <tbody 
    v-for="(m,km) in messages" 
    :key="km" 
    :class="m.read?'read':'unread'"
  >
  <tr class="msg__title">
      <td><input type="checkbox" @click="readmess(km)" class="check">
      <span :style="m.to?'color:red':'color:purple'">{{m.to==userloginid?'inbox':'outbox'}}</span>
      <span @click="showmess(km)"> {{m.type==="system"?"system":users[m.from].login}}</span></td>
      <td @click="showmess(km)">{{m.title}}</td>
  </tr>
  <tr v-show="m.show" class="msg__body"><td colspan=3 :style="(m.read)?'font-weight:normal':'font-weight:bold'">{{m.body}}</td></tr>
  <tr v-if="m.show&&m.type==='user-add'&&!addfriendflag" class="msg__body"><td colspan=3><button class="btn btn-success" @click="addfriend(m.from)">Add friend</button></td></tr>
  <tr v-if="m.show&&m.type==='group-add'&&!addgroupflag" class="msg__body"><td colspan=3><button class="btn btn-success" @click="addgroup(m.groupId)">Follow</button></td></tr>
  </tbody>
</table></p> 
<app-addmessage :friends="friends" :userloginid="userloginid" @addmessage="addmsg"></app-addmessage>
</section>
</template>
<style lang="scss">
.msg__title {
      background: #fdf!important;   
   }
.msg__body {
      background: #fff!important;   
  }
</style>
<script>
import Addmessage from './Addmessage.vue';

export default {
   props: {
     messages:{
       type: Array,
       required: true
     },
     users: {
       type: Array,
       required: true      
     },
     friends: {
       type: Array,
       required: true     
     },
     userloginid: {
       type: Number,
       required: true     
     }   
   },
   data() {
     return {
        addfriendflag:false,
        addgroupflag:false       
     } 
   },
   methods: {
     readmess(id){
        this.messages[id].read=!this.messages[id].read;
     },
     showmess(id)    {
        this.messages[id].show=!this.messages[id].show;
     },
     addfriend(id){
        this.$emit("addfriend",id);
        this.addfriendflag=true;      
     },
     addgroup(id){
        this.$emit("addgroup",id);
        this.addgroupflag=true;      
     },
     addmsg() {
        this.$emit("addmessage");     
     }
   },
   components:{
     appAddmessage: Addmessage   
   }
}
</script>  