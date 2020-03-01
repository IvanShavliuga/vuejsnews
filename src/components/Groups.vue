<template>
<section>
   <h3>Groups</h3> 
   <p>
   <table class="table">
     <tr v-for="(g,k) in groups" :key="k"><td><b>{{g.name}}</b>
        <br>{{g.category}}<br>Followers: <span class="badge badge-success">{{g.followers.length}}</span>
         Posts: <span class="badge badge-success">{{g.idNews.length}}</span> 
         <span class="text-danger" v-if="g.idAdmin === loginid">Admin</span></td>
        <td>{{g.desc}}</td></tr>
   </table>
   </p>
</section>
</template>
<style lang="scss">
   b {
     font-size: 20px;   
   }
</style>
<script>
export default {
   props: {
     groups:{
       type: Array,
       required: true
     },
     loginid: {
       type: Number,
       required: true     
     }   
   }
}
</script>  