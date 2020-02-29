<template>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">{{alert.header}}</h4>
  <p>{{alert.body}}</p>
  <hr>
  <p class="mb-0">{{alert.status}}</p>
</div>
</template>
<style lang="scss">

</style>
<script>
export default {
   props: {
       alert: {
           type: Object,
           required: true     
       }   
   }
}
</script>