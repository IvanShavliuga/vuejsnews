<template>
<section>
<h3>Add new group</h3> 
<div class="card mb-2 addpost">
  <form>
  <div class="form-group">
  <div class="card-header"><input class="form-control" type="text" v-model="group.name"></div>
  <div class="card-body">
  <p class="card-text"><textarea class="form-control" cols="50" rows="7"  v-model="group.desc"></textarea></p></div>
  <div class="card-footer"><input class="form-control" type="text" v-model="group.category">
  
  <button class="btn btn-outline-success my-2 my-sm-0 sendbutton" @click="sendgroup">Send post</button>
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
           group: {
               title:"",
               name: "Linux",
               desc: "Courses, code, simples, webinars",
               category: "study",
               id:0,
               idAdmin:0,
               idNews:[],
               followers:[0]
           },
           alert:{
               header: "Add group",
               body:"This group added",
               status:"Success"   
           },
           catnew:""      
       }   
   },
   methods: {
       sendgroup() {
           this.$store.dispatch("addgroup",this.group); 
           this.$emit("add");      
       }
   },
   components:{
       appAlert: Alert   
   }
}
</script>
