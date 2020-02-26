<template>
<main>
   <div class="content">
      <div class="row">
          <div class="card mb-2 block" v-for="(u,k) in users" :key="k">
          <div class="card-header">{{u.name}}<br></div>
          <div class="card-body">
          <h6 class="card-title">{{u.rang}}</h6>
          <p class="card-text">{{u.gender}}<br>{{u.spec}}<br>{{u.city}}<br></p> 
          </div>
          <div class="card-footer"><span class='text-primary'>
          @{{u.login}}</span> 
          </span>
          </div>
          </div>
          </div>
      </div>
   </div>
</main>
</template>
<style lang="scss">
  .block {
    width: 13rem;  
  }
</style>
<script>
export default {
    data() {
        return {
            users:[]        
        }    
    },
    created() {
        this.users=this.$store.getters.users;    
    }
}

</script>