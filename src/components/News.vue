<template>
<div class="row">
   <app-post v-for="(n,k) in posts" :post="n" :key="k"></app-post>
</div>
</template>
<style>]
.news {
   display: flex;
   flex-direction: rows;
}
</style>
<script>
import Post from './Post.vue';
export default {
   data() {
       return {  
                posts: [ 
                    { 
                    id: 0,
                    user:"iv2",
                    date:"12.08.2019",
                    time:"9:00", 
                    title: 'I am learn vue.js', 
                    desc: 'Vue.js is modern framework. This modern framework comes from China and is already gaining popularity. It is easy to learn and suitable for beginners.',
                    like:67,
                    repost:3,
                    views:500,
                    cat:"study",
                    type:"post",
                    likeclick:false 
                    },{ 
                    id: 1,
                    user:"iv2",
                    date:"13.08.2019",
                    time:"10:00", 
                    title: 'I am learn angular', 
                    desc: 'Angular is popular framework. This framework is used by large banks and online stores. At one time it was actively promoted by google. Angular-developers receive consistently high salaries',
                    like:35,
                    repost:5,
                    views:350,
                    cat:"study",
                    type:"post",
                    likeclick:false
                    },{
                    id: 2,
                    user:"iv2",
                    date:"13.08.2019",
                    time:"11:00", 
                    title: 'I learn JavaScript', 
                    desc: 'Modern JavaScript framework of the operation of the Internet. JavaScript works on both the server and the client. Modern JavaScript development requires knowledge of frameworks (JavaScript libraries).',
                    like:24,
                    repost:4,
                    views:278,
                    cat:"study",
                    type:"post",
                    likeclick:false 
                    } 
                ] 
       };   
   },
   methods:{
                repost(id){
                    let rp={};
                    rp.id=this.posts.length;
                    rp.type="repost "+this.posts[id].user;
                    rp.title=this.posts[id].title;
                    rp.desc=this.posts[id].desc;
                    rp.cat=this.posts[id].cat;
                    rp.like=0;
                    rp.views=0;
                    rp.repost=0;
                    let d= new Date();
                    rp.date=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
                    rp.time=d.getHours()+":"+d.getMinutes();
                    rp.user="anonimus";
                    rp.likeclick=false;
                    this.posts[id].repost++;
                    this.posts.push(rp);
                },
                like(id){
                    if(!this.posts[id].likeclick)
                       this.posts[id].like++;
                    else
                       this.posts[id].like--;
                    this.posts[id].likeclick=!this.posts[id].likeclick;
                }
    },
    components: {
        appPost: Post    
    } 
}
</script>