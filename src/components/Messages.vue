<template>
<div>
 <h3>Messages</h3> 
 <p><table class="table">
 <tbody 
    v-for="(m,km) in messages" 
    :key="km" 
    :class="m.read?'read':'unread'"
  >
  <tr @click="showmess(km)"><td><input type="checkbox" @click="readmess(km)" class="check">{{m.user}}</td><td>{{m.title}}</td></tr>
  <tr v-show="m.show" ><td colspan=3 :style="(m.read)?'font-weight:normal':'font-weight:bold'">{{m.body}}</td></tr>
  </tbody>
</table></p> 
</div>
</template>
<script>
export default {
   props: {
     messages:{
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