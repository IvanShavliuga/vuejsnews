<template>
<div>
   <h3>Groups</h3> 
   <p>
   <table class="table">
     <tr v-for="(g,k) in groups" :key="k"><td><b>{{g.name}}</b>
        <br>{{g.category}}<br>Followers: <span class="badge badge-success">{{g.followers.length}}</span>
         Posts: <span class="badge badge-success">{{g.idNews.length}}</span></td>
        <td>{{g.desc}}</td></tr>
   </table>
   </p>
</div>
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
     }   
   }
}
</script>  