<template>
<div class="content"> 
<div class="row">
   <app-post v-for="(n,k) in posts" 
         :post="n" 
         :key="k" 
         :users="users" 
         :loginid="loginid" 
         :admingroups="admingroups" 
         :groups="groups"
         :comments="comments">
   </app-post>
</div>
</div>
</template>
<script>
import Post from './Post.vue';
export default  {
    props: {
        posts: {
           type: Array,
           required: true        
        },
        users: {
            type: Array,
            required: true
        },
        loginid: {
            type: Number,
            required: true        
        },
        admingroups: {
         type:Array,
         required:true      
        },
        groups: {
            type: Array,
            required:true        
        },
        comments: {
            type:Array,
            required:true        
        }     
    },
    components: {
        appPost: Post    
    }
}
</script>