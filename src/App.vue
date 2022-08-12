<template>
<div style=background:#DDD2C4;>
  <div id="app">
   <nav id = "nav">
   <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid" id="nav2">
    <a class="navbar-brand" href="#">Memory Gallery</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li v-if="store.currentUser" class="nav-item">
         <router-link to="/MyProfile">MyProfile </router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/Home">Home</router-link> |
        </li>  
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/Login">Login</router-link> |
        </li>
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/SignUp">Sign Up</router-link> |
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <a href="#" @click.prevent="logout()" >Logout</a> |
        </li>
        <li class="nav-item">
          <router-link to="/AboutUs">About us</router-link> |
        </li>
        <li class="nav-item">
         <router-link to="/FAQs">FAQs</router-link>  |
        </li> 
         
        <li class="nav-item">
         <router-link to="/Trending">Trending </router-link>
        </li>  
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </nav>
    <router-view/>
  </div>
  </div>
</template>

<script>
import store from "@/store";
import {firebase} from "@/firebase";

firebase.auth(). onAuthStateChanged((user) => {
if (user) {
console.log(user.email);
store.currentUser= user.email;
} else{
console.log("no user");
store.currentUser= null;
}
});
export default{
       name:"app",
       data(){
           return {
               store,
           };
        },
        methods: {
        logout() {
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.push({name:"Login"})
            });
        },
      },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

 
 #nav2{
 padding: 30px;
 background-color:#FFF3DA;
 
 
 
  


 #a {
    font-weight: bold;
    font-family:Calibri;
    color: #2c3e50,
    
 &.1router-link-exact-active {
      color: #42b983;
    }
  }
 }
}

</style>
