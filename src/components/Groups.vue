<template>
<section>
   <h3>Groups</h3> 
   <p>
   <table class="table">
     <tr v-for="(g,k) in groups" :key="k">
        <td><b>{{g.name}}</b>
        <br>{{g.category}}<br>Followers: <span class="badge badge-success">{{g.followers.length}}</span><br>
         <ul><li v-for="(f,k) in filterFollowers(g)" :key="k"><img :src="users[f].avatar" :title="(f===loginid)?'You':(users[f].name)"></li></ul>
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
   ul {
     display: flex;
     margin:0;
     padding: 0;
     li {
        list-style:none;
        margin:0;
        img {
            width: 25px;
            height: 25px;        
            border-radius:50%;
            margin-right: 5px;
        }     
     }   
   }
</style>
<script>
export default {
   props: {
     groups:{
       type: Array,
       required: true
     },
     users:{
       type: Array,
       required: true
     },
     loginid: {
       type: Number,
       required: true     
     }   
   }, 
   methods: {
     filterFollowers(g){
         let fl = [];
         if(g.followers.length <= 4)
            fl=g.followers;
         else {
           for(let i=0; i<4; i++) {
              
              fl.push(g.followers[i]);           
           }   
         }
         return fl;     
     }    
   }
}
</script>  