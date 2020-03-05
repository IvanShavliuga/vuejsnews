<template>
<section>
   <h3>Cards</h3> 
   <p> <table class="table">
   <tbody v-for="(c,k) in personalcards" :key="k">
      <tr><th colspan="2">Cards #{{k+1}}</th></tr>
      <tr><td>header</td><td>{{c.header}}</td></tr>
      <tr><td>category</td><td>{{c.category}}</td></tr>
      <tr><td>date</td><td>{{c.date}}</td></tr>
      <tr><td>body</td><td>{{c.body}}</td></tr>
   </tbody>
   </table>
   </p>
</section>
</template>
<script>
export default {
    props:{
        personalcards: {
            type: Array,
            required:true        
        }    
    }
}
</script>