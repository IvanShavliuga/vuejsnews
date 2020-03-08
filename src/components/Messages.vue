<template>
<section>
 <h3>Messages</h3> 
 <p><table class="table">
 <tbody 
    v-for="(m,km) in messages" 
    :key="km" 
    :class="m.read?'read':'unread'"
  >
  <tr  class="msg__title"><td><input type="checkbox" @click="readmess(km)" class="check">{{m.type==="system"?"system":users[m.from].login}}</td><td @click="showmess(km)">{{m.title}}</td></tr>
  <tr v-show="m.show" class="msg__body"><td colspan=3 :style="(m.read)?'font-weight:normal':'font-weight:bold'">{{m.body}}</td></tr>
  <tr v-if="m.show&&m.type==='user-add'" class="msg__body"><td colspan=3><button class="btn btn-success">Add friend</button></td></tr>
  </tbody>
</table></p> 
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
export default {
   props: {
     messages:{
       type: Array,
       required: true
     },
     users: {
       type: Array,
       required: true      
     }   
   },
   methods: {
     readmess(id){
        this.messages[id].read=!this.messages[id].read;
     },
     showmess(id)    {
        this.messages[id].show=!this.messages[id].show;
     }
   }
}
</script>  