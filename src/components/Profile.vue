<template>
 <div class="profile">
 <nav class="nav">
  <a :class="['nav-link',(activelink==0)?'active':'']" href="#" @click="activelink=0"> Profile</a>
  <a :class="['nav-link',(activelink==1)?'active':'']" href="#" @click="activelink=1">Messages <span class="badge badge-success">{{messages.length}}</span></a>
  <a :class="['nav-link',(activelink==2)?'active':'']" href="#" @click="activelink=2">Posts <span class="badge badge-success">{{posts.length}}</span></a>
  <a :class="['nav-link',(activelink==3)?'active':'']" href="#" @click="activelink=3">Groups <span class="badge badge-success">{{groups.length}}</span></a>
  <a :class="['nav-link',(activelink==4)?'active':'']" href="#" @click="activelink=4">Friends <span class="badge badge-success">{{friends.length}}</span></a>
 </nav>
 <app-infouser v-if="activelink==0"></app-infouser>
 <app-messages v-if="activelink==1"></app-messages> 
 <app-news :posts="posts" v-if="activelink==2" :users="[user]"></app-news>
 <app-groups :groups="groups" v-if="activelink==3"></app-groups>
</div> 
</template>
<style lang="scss">

.profile {
    background: #eee;
    padding: 10px;
    button{
       width:28px;
       height:28px;
       padding:5px!important;
    }
    th{
       text-align:center;
       background-color:#ffd;
    }
    tr:nth-child(2n+1){
       background-color:#eff;
    }
    tr:nth-child(2n){
       background-color:#fff;
    }
    .skill{
       color:blue;
    }
    .del{
       color:red;
       padding-right:5px;
       cursor: pointer;
    }
    .unread{
       font-weight:bold;
    }
    .read{
       font-weight:normal;
    }
}

</style>
<script> 

import Infouser from './Infouser.vue';
import Messages from './Messages.vue';
import News from './News.vue';
import Groups from './Groups.vue';

export default{
   data() {
        return {
            user:{},
            messages:[],
            posts:[],
            friends:[],
            groups:[],
            activelink:0
        };
   },
   components: {
        appInfouser: Infouser,
        appMessages: Messages,
        appNews: News,
        appGroups: Groups   
   },
   created(){
        this.user=this.$store.getters.user;
        this.messages=this.$store.getters.messages; 
        this.posts=this.$store.getters.postsUser;  
        this.groups=this.$store.getters.groups;
   }
}


 </script> 

