<template>
<div class="row mb-2">
    <app-card></app-card>    
    <app-card></app-card>
</div>


</template>
<style lang="scss">
 .card__block {
     background: #fff; 
 }  
</style>
<script>
import Card from './Card.vue';

export default {
    data() {
       return {
          
       };    
    },
    components:{
        appCard: Card    
    }
}
</script>