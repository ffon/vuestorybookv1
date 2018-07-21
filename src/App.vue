<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>

      <div id="navbarsExampleDefault" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <router-link class="nav-link"  to="/">Home <span class="sr-only">(current)</span></router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/about">About</router-link>
          </li>

        </ul>
        
      </div>
    </nav>
    <div class="container" style="margin-top:80px;">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  nav {
    .router-link-exact-active {
      font-weight: 500 !important;
      color: #fff;
    }
  }
}
</style>
