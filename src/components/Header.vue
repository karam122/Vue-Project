<template>
<div class="container">
    <nav class="navbar navbar-expand-lg  navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/get-users">Users</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/post-user">Add User</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/get-store">get Store User</a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        
        <button v-on:click="logout" class="btn btn-outline-dark bg-dark w-50 me-2 text-white" type="submit">Log Out</button>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name:'Header',
    methods:{
      logout(){
        localStorage.removeItem('id')
        this.$router.push({name:'SignIn'})
      }
    }
}
</script>