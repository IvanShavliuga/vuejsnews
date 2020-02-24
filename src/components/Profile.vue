<template>
 <div class="profile">
 <nav class="nav">
  <a class="nav-link active" href="#"> Profile</a>
  <a class="nav-link" href="#">Messages <span class="badge badge-success">12</span></a>
  <a class="nav-link" href="#">Posts <span class="badge badge-success">140</span></a>
  <a class="nav-link" href="#">Group <span class="badge badge-success">3</span></a>
  <a class="nav-link" href="#">Friends <span class="badge badge-success">6</span></a>
 </nav>
 <app-infouser></app-infouser>
 <app-messages></app-messages> 
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

export default{
   components: {
        appInfouser: Infouser,
        appMessages: Messages   
   }
}


 </script> 

