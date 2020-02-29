<template>
     <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative promo">
        <div class="col p-4 d-flex flex-column position-static  promo__block">
          <strong class="d-inline-block mb-2 text-primary promo__cat">{{card.category}}</strong>
          <h3 class="mb-0">{{card.header}}</h3>
          <div class="mb-1 text-muted promo__date">{{card.date}}</div>
          <p class="card-text mb-auto">{{card.body}}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block  promo__image">
          <img src="../assets/images/robot2.jpg">          
          </div>
      </div>
    </div>
</template>
<style lang="scss">
 .promo{
   background: #fff; 
   h3 {
      font-size: 16px;
      font-weight: bold;
      font-style:italic;
      color: #93f;
      line-height:17px;
          
   } 
   h3:hover{
      text-decoration:underline!important;   
   }
   &__date {
      font-size:12px;   
   }
   p {
      font-size:14px;
      line-height:15px; 
      text-align:justify;
      word-spacing:1px;
              
   }
    &__cat {
        margin-bottom:7px!important;   
    }  
    &__image {
     
     img {
       width:200px;
       height:250px;
       border:1px solid white;   
     }
    }  
  } 
</style>
<script>
export default {
   props: {
       card: {
           type: Object,
           required: true     
       }   
   }
}

</script>