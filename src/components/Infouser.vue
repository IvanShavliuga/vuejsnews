<template>
<div>
   <h3>Profile</h3> 
   <p>
   <table class="table">
    <tr><th colspan ="2">Information of user</th></tr>
     <tr><td>Login</td><td>{{user.login}}</td></tr>
     <tr><td>Rang</td><td>{{user.rang}}</td></tr>
     <tr><td>Age</td><td>{{user.age}}</td></tr>
     <tr><td>Gender</td><td>{{user.gender}}</td></tr>
     <tr v-if="!showeditname" @click="showflagname()"><td>Name</td><td>{{user.name}}</td></tr>
     <tr v-else><td>Name</td><td><input type="text" placeholder="name" v-model="editname">
     <button class ="btn btn-primary" @click="checkname()"><i class="fa fa-check"></i></button></td></tr>
     <tr v-if="!showeditspec" @click="showflagspec()"><td>Specialization</td><td>{{user.spec}}</td></tr>
     <tr v-else><td>Specialization</td><td><input type="text" placeholder="specialization" v-model="editspec">
     <button class ="btn btn-primary" @click="checkspec()"><i class="fa fa-check"></i></button></td></tr>
     <tr><td>Skills</td><td>
         <span v-for="(s,ks) in user.skills" :key="ks">
            <span class='skill'>{{s}}</span><span class="del" @click="delskill(ks)">x</span>
         </span> <input type="text" placeholder="skill" v-model="skill">
         <button class="btn btn-primary" @click="addskill()"><i class="fa fa-plus"></i></button>
     </td></tr>
     <tr v-if="!showeditcity" @click="showflagcity()"><td>City</td><td>{{user.city}}</td></tr>
     <tr v-else><td>City</td><td><input type="text" placeholder="city" v-model="editcity">
     <button class ="btn btn-primary" @click="checkcity()"><i class="fa fa-check"></i></button></td></tr>
     <tr><th colspan="2">Contacts</th></tr>
     <tr><td>Link profile</td><td>{{user.link}}</td></tr>
     <tr v-for="(c,kc) in user.contacts" :key="kc"><td>
     {{c.messenger}}
     </td><td>{{c.contact}}</td></tr>
     <tr><td><input type="text" placeholder="messenger" v-model="mess"></td>
     <td><input type="text" placeholder="contact" v-model="cont">
     <button class="btn btn-primary" @click="addcont()"><i class="fa fa-plus"></i></button>
     </td>
     </tr>
     </table></p> 
 </div> 
</template>
<script>
export default {
   props: {
     user:{
       type: Object,
       required: true
     }   
   },
   data() {
      return{
        editname:"",
        editspec:"",
        editcity:"",
        showeditname:false,
        showeditspec:false,
        showeditcity:false,
        mess:"",
        cont:"",
        skill:""
             
      };//return
    },//data
    methods: {
            addcont(){
                this.user.contacts.push({
                    messenger:this.mess,
                    contact:this.cont
                })
            },
            addskill(){
                this.user.skills.push(this.skill);
            },
            delskill(ind){
                this.user.skills.splice(ind,1);
            },
            readmess(id){
                this.messages[id].read=!this.messages[id].read;
            } ,
            showmess(id)    {
                this.messages[id].show=!this.messages[id].show;
            },
            checkname(){
                this.user.name=this.editname;
                this.showeditname=false;
            },
            showflagname(){
                this.showeditname=!this.showeditname;
            },
            checkspec(){
                this.user.spec=this.editspec;
                this.showeditspec=false;
            },
            showflagspec(){
                this.showeditspec=!this.showeditspec;
            },
            checkcity(){
                this.user.city=this.editcity;
                this.showeditcity=false;
            },
            showflagcity(){
                this.showeditcity=!this.showeditcity;
            }
    }
}
</script>  