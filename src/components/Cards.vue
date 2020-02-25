<template>
<div class="row mb-2">
    <app-card v-for="(c,k) in cards" :key="k" :card="c"></app-card>
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
    props: {
       cards: {
           type: Array,
           required: true       
       }
    },
    data() {
       return {
          cards: [{
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
          }, {
             category:"Work",
             header:"Development of a news portal",
             date:"25.02.2020",
             body:"The site must be developed using  technology Vue.js. The news portal must be set up using bootstrap."          
                     
          }]
       };    
    },
    components:{
        appCard: Card    
    }
}
</script>