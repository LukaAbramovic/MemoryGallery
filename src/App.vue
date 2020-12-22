<template>
<div id="div-poz"></div>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Login">Prijava</router-link> |
      <router-link to="/SignUp">Registracija</router-link>
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

 #div-poz {

 background-image:"pocetna2.jpg";
 }

#nav {
  padding: 30px;
  background-color:#DDD2C4;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
