<template>
<div class="row mb-2">
    <app-card v-for="(c,k) in cards" :key="k" :card="c" @cardclick="clickcard(k)"></app-card>
</div>
</template>
<style lang="scss">
 
</style>
<script>
import Card from './Card.vue';

export default {
    props: {
       cards: {
           type: Array,
           required: true       
       }  
    },
    components:{
        appCard: Card    
    },
    methods: {
        clickcard(k)  {
            console.log("CARDS: "+k);
            this.$emit("cardclick",k);       
        }    
    }
}
</script>