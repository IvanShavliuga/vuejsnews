<template>
  <nav class="nav">
    <a class="nav-link active" href="#">Profile</a>
    <a class="nav-link" href="#"
      >Messages <span class="badge badge-success">12</span></a
    >
    <a class="nav-link" href="#"
      >Posts <span class="badge badge-success">140</span></a
    >
    <a class="nav-link" href="#"
      >Group <span class="badge badge-success">3</span></a
    >
    <a class="nav-link" href="#"
      >Friends <span class="badge badge-success">6</span></a
    >
  </nav>
</template>
<style lang="scss">
.nav {
  border-bottom: 1px solid #7de;
  margin-bottom: 15px;
  a.nav-link.active {
    font-weight: bold !important;
    text-transform: uppercase !important;
  }
}
</style>
