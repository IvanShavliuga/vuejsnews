<template>
<div class="content"> 
<div class="row">
   <app-post v-for="(n,k) in posts" :post="n" :key="k" :user="user"></app-post>
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
        user: {
            type: Object,
            required: true
        }    
    }, 
    components: {
        appPost: Post    
    }
}
</script>