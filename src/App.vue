<template>
<div style=background:#DDD2C4;>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/SignUp">Sign Up</router-link> |
      <router-link to="/AboutUs">About us</router-link> |
      <router-link to="/FAQs">FAQs</router-link>
    </div>
    <router-view/>
  </div>
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

 }

#nav {
  padding: 30px;
  background-color:#FFF3DA;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
