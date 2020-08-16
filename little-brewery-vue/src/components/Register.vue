<template>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">Register</div>
                        <div class="card-body">
                            <form>
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">First Name</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" v-model="firstname" required autofocus>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Last Name</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" v-model="lastname" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" v-model="email" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" v-model="password" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" v-model="password_confirmation" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Address</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" v-model="address">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">City</label>
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" v-model="city">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Phone</label>
                                    <div class="col-md-6">
                                        <input id="name" type="tel" pattern="^((\+[0-9]{2,3}[ \.-]?(\(0\))?[0-9])|([0-9]{2}))([ \.-]?[0-9]{2}){4}$" 
                                        class="form-control" v-model="mobile">
                                    </div>
                                </div>
                                
                                
                                
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                            Register
                                        </button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {axiosPost} from '@/api/api';
export default {
    props : ['nextUrl'],
    data(){
        return {
            firstname: "",
            lastname: "",
            role: "buyer",
            address: "",
            city: "",
            mobile: "",
            email : "",
            password : "",
            password_confirmation : ""
        }
    },
    methods : {
        handleSubmit(e) {
            e.preventDefault()
            if (this.password !== this.password_confirmation || 
            this.password.length <= 0) {
                this.password = ""
                this.password_confirmation = ""
                return alert('Passwords do not match')
            }

            /*
                'firstname' => 'required|max:20',
                'lastname' =>'required|max:20',
                'role' =>'required|in:"seller", "buyer"',
                'address' => 'nullable',
                'city' => 'nullable',
                'mobile' =>'nullable',
                'email' => 'required|email',
                'password' => 'required|min:6',
                'confirm_password' => 'required|same:password',
             
            let name = this.name
            let email = this.email
            let password = this.password
            let c_password = this.password_confirmation
            */

            let firstname = this.firstname;
            let lastname = this.lastname;
            let role = this.role;
            let address = this.address;
            let city = this.city;
            let mobile = this.mobile;
            let email = this.email;
            let password = this.password;
            let confirm_password = this.password_confirmation;

            axiosPost('/register', {firstname, lastname, role, email, address, city, mobile, password, confirm_password})
            .then(data => {
                
                localStorage.setItem('brewery.user', JSON.stringify(data.user));
                localStorage.setItem('brewery.jwt', data.token)
                if(localStorage.getItem('brewery.jwt') != null) {
                    this.$emit('loggedIn');
                    let nextUrl = this.$route.params.nextUrl;
                    this.$router.push((nextUrl != null ? nextUrl : '/'))
                }
            });
            
        }
    }
}
</script>
