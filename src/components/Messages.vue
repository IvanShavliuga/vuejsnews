<template>
<div>
 <h3>Messages</h3> 
 <p><table class="table">
 <tbody 
    v-for="(m,km) in messages" 
    :key="km" 
    :class="m.read?'read':'unread'"
  >
  <tr @click="showmess(km)"><td><input type="checkbox" @click="readmess(km)"></td>
  <td>{{m.user}}</td><td>{{m.title}}</td></tr>
  <tr v-show="m.show"><td colspan=3>{{m.body}}</td></tr>
  </tbody>
</table></p> 
</div>
</template>
<script>
export default {
   data() {
      return {
      messages:[{
            user:"admin",
            id:1,
            title:"success registration",
            body:"You have successfully registered for the website test.com. Terms of use and licensing agreement here. Please fill out your profile and Sub be to the news columns of your choice.",
            read:false,
            show:false
        },{
            user:"admin",
            id:2,
            title:"User Angel application add to friends",
            body:"Please add my contact as a friend",
            read:false,
            show:false
        }] //messages
      
      
      };      
   }, 
   methods: {
      readmess(id){
                this.messages[id].read=!this.messages[id].read;
            } ,
            showmess(id)    {
                this.messages[id].show=!this.messages[id].show;
            }
   }

}
</script>
