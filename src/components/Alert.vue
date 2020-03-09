<template>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">{{alert.header}}</h4>
  <p>{{alert.body}}</p>
  <hr>
  <p class="mb-0"><button @click="closebtn" class="btn btn-primary">Close</button> {{alert.status}}</p>
</div>
</template>
<style lang="scss">
  button {
      margin-right:25px;  
  }
</style>
<script>
export default {
   props: {
       alert: {
           type: Object,
           required: true     
       }   
   },
   methods:{
       closebtn() {
           this.$emit("close");       
       }    
   }
}
</script>