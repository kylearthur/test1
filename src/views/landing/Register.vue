<template>
<div class="container-fluid">
    <div class="row no-gutter">
        <!-- The image half -->
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <!-- The content half -->
        <div class="col-md-6 bg-color2">
            <div class="login d-flex align-items-center py-5">
                <!-- Demo content-->
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-4 text-gold">Golden Buzzer</h3>
                            <p class="text-colorwhite mb-4">Register here</p>
                            <form @submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Email address"  v-model="userData.email" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    <span v-if="v$.email.$error" class="text-danger">{{ v$.email.$errors[0].$message }}</span>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="fullname" type="text" placeholder="Full Name" v-model="userData.name"  autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    <span v-if="v$.name.$error" class="text-danger">{{ v$.name.$errors[0].$message }}</span>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="mobile" type="text" placeholder="Mobile Number" v-model="userData.mobile_number"  autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    <span v-if="v$.mobile_number.$error" class="text-danger">{{ v$.mobile_number.$errors[0].$message }}</span>
                                </div>
                                <div class="row">
                                    <div class="form-group mb-3 col-6">
                                        <input id="inputPassword" type="password" placeholder="Password" v-model="userData.password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                        <span v-if="v$.password.$error" class="text-danger">{{ v$.password.$errors[0].$message }}</span>
                                    </div>

                                    <div class="form-group mb-3 col-6">
                                        <input id="inputPassword" type="password" placeholder="Confirm Password" v-model="userData.confirmPassword" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                        <span v-if="v$.confirmPassword.$error" class="text-danger">{{ v$.confirmPassword.$errors[0].$message }}</span>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase m-1 rounded-pill shadow-sm" >Register</button>
                                <button type="button" class="btn btn-primary btn-block text-uppercase m-1 rounded-pill shadow-sm" @click="clearForm()" >clear</button>
                                <!-- <div class="text-center text-colorwhite d-flex justify-content-between mt-4"><p>powered by<a href="https://bootstrapious.com/snippets" class="font-italic text-muted"> 
                                        <u class="text-colorblue2"> Hans Carreon</u></a></p></div> -->
                            </form>
                        </div>
                    </div>
                </div><!-- End -->

            </div>
        </div><!-- End -->
    </div>
    
</div>

</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength, sameAs } from '@vuelidate/validators'
import { computed } from 'vue-demi'
import GlobalMixins from '@/components/GlobalMixins';
import { useRouter } from 'vue-router'
export default {
    name:'Register',
    mixins:[GlobalMixins],
    data(){
        return{
        }
    },
    setup(){
        const name = ref(null);
        const router = useRouter()
        const { baseUrl, getSession, setSession  } = GlobalMixins();
        const userData = reactive({
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            mobile_number:'',
        })
        const rules = computed(()=>{
            return {
                name: { required },
                email: { required, email },
                mobile_number: { required, minLength:minLength(11) },
                password: { required, minLength:minLength(7) },
                confirmPassword: { required, minLength:minLength(7), sameAs:sameAs(userData.password) },
            }
        })
        const v$ = useVuelidate(rules, userData)

       
        const submitRegister = async ()=>{
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            };
            fetch(`${baseUrl.value}/users`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const token = data.token;
                const user = data.user;
                const coins = data.coins;
                setSession(token,'token')
                setSession(user,'user')
                setSession(coins,'coins')
                router.push({ name: 'UserDashboardIndex' })
            })
            .catch(err =>{ console.log(err)})
           
        }

        const clearForm = () =>{
            userData.name = ''
            userData.email = ''
            userData.password = ''
            userData.mobile_number = ''
            userData.confirmPassword = ''

        }


        return {setSession, getSession, userData, v$, submitRegister, clearForm}

    },
    
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                this.submitRegister();
            }else{
                console.log('error')
            }

        }

    }
}
</script>

<style lang="scss" scoped>

@import "@/style/variables.scss";
.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url("~@/assets/ibongtiririt.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
