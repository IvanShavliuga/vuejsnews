<template>
     <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static  card__block">
          <strong class="d-inline-block mb-2 text-primary cat">{{card.category}}</strong>
          <h3 class="mb-0">{{card.header}}</h3>
          <div class="mb-1 text-muted card-date">{{card.date}}</div>
          <p class="card-text mb-auto">{{card.body}}</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block  card__block">
          <svg class="bd-placeholder-img" width="200" height="260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
   h3 {
      font-size: 16px;
      font-weight: bold;
      color: #93f;
      
   } 
   h3:hover{
      text-decoration:underline!important;   
   }
   .card-date {
      font-size:12px;   
   }
   p {
      font-size:14px;
          
   }
   .cat {
      margin-bottom:2px;   
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