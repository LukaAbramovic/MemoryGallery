<template> 
 <div class="about">

 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputUsername1">User name</label>
 <input type="username" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
 
 </div>
 <div class="form-group">
 <label for="exampleInputname1">Name</label>
 <input type="name" v-model="name" class="form-control" id="exampleInputPassword1" placeholder="Name" />
 </div>
 
 <div class="form-group">
 <label for="exampleInputEmail1">Email</label>
 <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter e-mail" />
 
 </div>-
 <div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
 </div>
 
 <button type="button" @click="signup" class="btn btn-primary" id="button1">Submit</button>
 
 <button type="Facebook" class="btn btn-primary" id="button1"><img src="@/assets/facebook.png" height="30">Sign up with Facebook</button>
 
 <button type="Google" class="btn btn-primary" id="button1"><img src="@/assets/google.png" height="30">Sign up with Google</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
 

</template>


<script>

import {firebase} from "@/firebase";

export default{
name: "signup",
   data(){
       return{
         username: "",
         name: "",
         email: "",
         password: "",
         };
    },
    methods: {
        signup()  {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function() {
                console.log("Succesful sign up");
                })
                .catch(function(error) {
                console.error("Error",error);
                });
            console.log("continue");
        
                 
        },
    },  
};

</script>



