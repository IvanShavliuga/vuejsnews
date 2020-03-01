<template>
<div class="row mb-2">
    <app-card v-for="(c,k) in cards" :key="k" :card="c"></app-card>
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
    }
}
</script>