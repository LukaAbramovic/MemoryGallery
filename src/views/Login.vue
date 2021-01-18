<template>
 <div class="about">
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 </br>
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
 <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
 </div>
 </br>
 <div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 </br>
 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
 </div>
 </br>
 <button type="button" @click="login()" class="btn btn-primary" id="button1">Login</button>
 </br></br>
 <button type="Facebook" class="btn btn-primary" id="button2"><img src="@/assets/facebook.png" height="30">Login with Facebook</button>
  </br></br>
 <button type="Google" class="btn btn-primary" id="button3"><img src="@/assets/google.png" height="30">Login with Google</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>

import {firebase} from "@/firebase";

<style lang="scss">
#button1 {
background-color:#5F5547;}
#button2 {
background-color:#5F5547;}
#button3 {
background-color:#5F5547;}
</style>

<script>
export default {
    name: "login",
    data() {
           return{
           username: '',
           password: '',
           };
    },
    methods: {
        login() {
        console.log("login..." + this.username);
        firebase.auth().signInWithEmailAndPassword(this.username, this.password)
            .then((result) => {
                console.log("Uspjesna prijava", result);
                this. $router.replace({name: "home" });
            })
           .catch(function(e){
                console.error("greska", e);
        });
        },
    },
};
</script>