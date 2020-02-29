<template>
<div>
 <h3>Friends</h3> 
 <p> <table class="table">
 <tbody v-for="(f,k) in friends" :key="k">
 <tr><th colspan="2">{{f.name}}</th></tr>
 <tr><td>Login</td><td>{{f.login}}</td></tr>   
 <tr><td>Age</td><td>{{f.age}}</td></tr>    
 <tr><td>Rang</td><td>{{f.rang}}</td></tr> 
 <tr><td>Gender</td><td>{{f.gender}}</td></tr>
 <tr><td>Specialization</td><td>{{f.spec}}</td></tr>
 <tr><td>Skills</td><td><span v-for="(s,ks) in f.skills" :key="ks"><span class='skill'>{{s+", "}}</span></span> </td></tr>
 <tr><td>City</td><td>{{f.city}}</td></tr>
 <tr><td>Link profile</td><td>{{f.link}}</td></tr>
 <tr v-for="(c,kc) in f.contacts" :key="kc"><td>
 {{c.messenger}}
 </td><td>{{c.contact}}</td></tr>
</tbody>
</table>
</p>
</div>
</template>
<script>
export default {
   props: {
      friends: {
          type: Array,
          required: true      
      }
   }
}
</script>