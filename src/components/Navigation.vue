<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">IT club</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a href="#"><router-link to="/" class="nav-link" >Home</router-link></a>
      </li>
      <li class="nav-item">
        <a href="#"><router-link to="/profile" class="nav-link" >Profile</router-link></a>
      </li>
      <li class="nav-item">
        <a href="#"><router-link to="/groupsall" class="nav-link" >Groups</router-link></a>
      </li>
       <li class="nav-item">
        <a href="#"><router-link to="/users" class="nav-link" >Users</router-link></a>
      </li>
    </ul
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<style lang="scss">
   .navbar {
       background: #c5c!important;
       color: #0ff!important; 
       .nav-item {
          outline: none!important;
          .nav-link.disabled {
              color: #0aa!important;   
              text-decoration:line-through!important;        
          } 
          .nav-link {
              outline: none!important;
              color: #0ff!important; 
              text-decoration: underline!important;
          } 
          .nav-link:active {
              color:#0bb!important;
          }
          .dropdown-menu {
              background: #c5c!important;
              .dropdown-item {
                  color: #0ff!important;              
              }
          }
       }
       form button.btn.btn-outline-success {
          width:75px!important; 
          height:40px!important;      
       }
   }
</style> 
