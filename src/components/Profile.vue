<template>
 <div class="profile">
 <nav class="nav">
  <a :class="['nav-link',(activelink==0)?'active':'']" href="#" @click="activelink=0"> 
     Profile</a>
  <a :class="['nav-link',(activelink==1)?'active':'']" href="#" @click="activelink=1">
     Messages <span class="badge badge-success">{{messages.length}}</span></a>
  <a :class="['nav-link',(activelink==2)?'active':'']" href="#" @click="activelink=2">
     Posts <span class="badge badge-success">{{posts.length}}</span></a>
  <a :class="['nav-link',(activelink==3)?'active':'']" href="#" @click="activelink=3">
     Groups <span class="badge badge-success">{{groups.length}}</span></a>
  <a :class="['nav-link',(activelink==4)?'active':'']" href="#" @click="activelink=4">
     Friends <span class="badge badge-success">{{friends.length}}</span></a>
  <a :class="['nav-link',(activelink==5)?'active':'']" href="#" @click="activelink=5">
     Personal posts <span class="badge badge-success">{{personalposts.length}}</span></a>  
  <a :class="['nav-link',(activelink==6)?'active':'']" href="#" @click="activelink=6">
     Add post</a>
  <a :class="['nav-link',(activelink==7)?'active':'']" href="#" @click="activelink=7">
     Add group</a>
  <a :class="['nav-link',(activelink==8)?'active':'']" href="#" @click="activelink=8">
     You cards <span class="badge badge-success">{{personalcards.length}}</span></a>
</nav>
 <app-alert 
      v-if="addflag" 
      :alert="alert" 
      @close="closealert">
 </app-alert>
 <app-infouser      
      v-if="activelink==0" 
      :user="user">
 </app-infouser>
 <app-messages 
      v-if="activelink==1" 
      :messages="messages" 
      :users="users" 
      @addfriend="addfriend" 
      @addgroup="follow" 
      @addmessage="addmsg" 
      :friends="friends" 
      :userloginid="loginid">
 </app-messages> 
 <app-news 
      :posts="posts" 
      v-if="activelink==2" 
      :users="users" 
      :loginid="loginid" 
      :admingroups="admingroups" 
      :groups="groupsall"
      :comments="comments">
 </app-news>
 <app-groups 
      :groups="groups" 
      :users="users"
      :loginid="loginid" 
      v-if="activelink==3">
 </app-groups>
 <app-friends 
      :friends="friends" 
      v-if="activelink==4">
 </app-friends>
 <app-feeduser 
      :posts="personalposts" 
      :loginid="loginid" 
      :users="users" 
      v-if="activelink==5" 
      :admingroups="admingroups" 
      :groups="groupsall"
      :comments="comments">
 </app-feeduser>
 <app-addpost 
      v-if="activelink==6" 
      @add="addpost" 
      :loginid="loginid"
      :admingroups="admingroups">
 </app-addpost> 
 <app-addgroup 
      v-if="activelink==7" 
      @add="addgroup">
 </app-addgroup>
 <app-cardsuser 
      v-if="activelink==8" 
      :personalcards="personalcards" 
      @edit="editcard">
 </app-cardsuser>
</div> 
</template>
<style lang="scss">

.profile {
    background: #eee;
    padding: 10px;
    .nav {
       border:1px solid #0dd;
       background:#ddeeee;     
       &-link {
          margin-right: -20px;  
          outline: none;   
       }
       a.nav-link.active {
         font-weight: bold!important;
         text-transform: uppercase!important;
      }   
    }
    .btn-adds{
       width:28px;
       height:28px;
       padding-top:2px!important;
       padding-left:8px!important;
       i {
          font-size:12px;
          line-height:8px;                 
       }
    }
    th{
       text-align:left;
       font-size:18px;
       color:#34a;
       background-color:#ffd;
    }
    tr:nth-child(2n+1){
       background-color:#eff;
    }
    tr:nth-child(2n){
       background-color:#fff;
    }
    td:first-child{
       width:20%;
       font-weight:bold;
       text-align:left;     
    }
    td{
       cursor: pointer;    
    }
    .skill{
       color:blue;
       padding-right:5px;
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
    .check{
       margin-right:15px;    
    }
    .avatar {
       width:80;
       height:80;
       border-radius:50%;    
    }
}

</style>
<script> 
import Alert from './Alert.vue';
import Infouser from './Infouser.vue';
import Messages from './Messages.vue';
import News from './News.vue';
import Groups from './Groups.vue';
import Friends from './Friends.vue';
import Feeduser from './Feeduser.vue';
import Addpost from './Addpost.vue';
import Addgroup from './Addgroup.vue';
import Editpost from './Editpost.vue';
import Cardsuser from './Cardsuser.vue';

export default{
   data() {
        return {
            user:{},
            users:{},
            messages:[],
            posts:[],
            reposts:[],
            friends:[],
            groups:[],
            groupsall:[],
            personalposts:[],
            personalcards:[],
            admingroups:[],
            comments:[],
            activelink:2,
            loginid:0,
            addflag:false,
            alert:{}
        };
   },
   methods:{
        closealert() {
           this.addflag=false; 
        },
        addpost() {
           this.addflag=true;
           this.posts=this.$store.getters.postsUser;     
           this.groups=this.$store.getters.groupsUser; 
           this.groupsall=this.$store.getters.groups;
           this.personalposts=this.$store.getters.personalposts;
           this.alert.header = "Add post";
           this.alert.body =  "This post added";
           this.alert.status = "Success update";
        },
        addgroup() {
           this.addflag=true;
           this.groups=this.$store.getters.groupsUser; 
           this.alert.header = "Add group";
           this.alert.body =  "This group added";
           this.alert.status = "Success added";
        },
        editpost() {
           this.addflag=true;
           this.posts=this.$store.getters.postsUser;     
           this.groups=this.$store.getters.groupsUser; 
           this.alert.header = "Edit post";
           this.alert.body =  "This post changed";
           this.alert.status = "Success update";
        }, 
        editcard(){
           this.personalcards=this.$store.getters.personalcards;
           this.alert.header = "Edit card";
           this.alert.body =  "This card changed";
           this.alert.status = "Success update";   
           this.addflag=true;     
        },
        addfriend(id) {
           this.$store.dispatch("addfriend",this.users[id]);
           this.friends=this.$store.getters.friends;
           this.alert.header = "Add friend";
           this.alert.body =  "This user add to friend";
           this.alert.status = "Success added";   
           this.addflag=true;        
        },
        follow(id) {
           this.alert.header = "Subscribe group";
           this.alert.body =  "This group subscribe";
           this.alert.status = "Success subscribe";   
           this.addflag=true;     
           this.$store.dispatch("groupfollow",this.groupsall[id]);
           this.groups=this.$store.getters.groupsUser; 
        },
        addmsg() {
           this.alert.header = "Message send";
           this.alert.body =  "You sent message user";
           this.alert.status = "Success send";   
           this.addflag=true;
           this.messages=this.$store.getters.messages;
        }   
   },
   components: {
        appInfouser: Infouser,
        appMessages: Messages,
        appNews: News,
        appGroups: Groups,
        appFriends: Friends,
        appFeeduser: Feeduser,
        appAddpost: Addpost,
        appAlert: Alert,
        appAddgroup:Addgroup,
        appEditpost:Editpost,
        appCardsuser:Cardsuser    
   },
   created(){
        this.loginid=this.$store.getters.loginid;
        this.user=this.$store.getters.user;
        this.users=this.$store.getters.users;
        this.messages=this.$store.getters.messages; 
        this.posts=this.$store.getters.postsUser;
        this.reposts=this.$store.getters.repostsUser;  
        this.groups=this.$store.getters.groupsUser;
        this.friends=this.$store.getters.friends;
        this.admingroups = this.$store.getters.groupsAdmin;
        this.personalposts= this.$store.getters.personalposts; 
        this.personalcards= this.$store.getters.personalcards;
        this.comments=this.$store.getters.comments;
        this.groupsall=this.$store.getters.groups;
        
   }
}
 </script> 

