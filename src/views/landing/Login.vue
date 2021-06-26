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
                            <p class="text-colorwhite mb-4">Welcome back login here</p>
                            <form @submit.prevent="submitForm">
                                <div class="form-group mb-3">
                                    <input id="inputEmail" type="email" placeholder="Email address" v-model="userData.email"  autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                                    <span v-if="v$.email.$error" class="text-danger">{{ v$.email.$errors[0].$message }}</span>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" v-model="userData.password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                                        <span v-if="v$.password.$error" class="text-danger">{{ v$.password.$errors[0].$message }}</span>
                                </div>
                                <!-- <div class="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked class="custom-control-input">
                                    <label for="customCheck1" class="custom-control-label text-colorwhite">Remember password</label>
                                </div> -->
                                <div>
                                <router-link :to="{name:'Register'}" class="text-white m-2 p-2">Register Here</router-link>

                                </div>
                                <router-link :to="{name:'UserDashboardIndex'}"><button type="button" class="btn mt-2 btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button></router-link>
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
import { computed, onMounted } from 'vue-demi'
import GlobalMixins from '@/components/GlobalMixins';
import { useRouter } from 'vue-router'

export default {
    name:'Login',
    setup(){
        const router = useRouter()
        const { baseUrl, getSession, setSession } = GlobalMixins();
        const userData = reactive({
            email:'',
            password:'',
        })
        const rules = computed(()=>{
            return {
                email: { required, email },
                password: { required, minLength:minLength(7) },
            }
        })
        const v$ = useVuelidate(rules, userData)

        
        const submitLogin = async ()=>{
            const requestOptions = {
                method: "POST",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQxOGRkYTJjOTYxZTEzNzZlMWYzYmIiLCJpYXQiOjE2MjQzNDYwOTd9.D2a23YrNZMBUyND1YY3dd8y594Yh_8RZaHB8wyFHhyA',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            };
            fetch(`${baseUrl.value}/users/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                const token = data.token;
                const user = data.user;
                setSession(token,'token')
                setSession(user,'user')
                router.push({ name: 'UserDashboardIndex', query:{flash:'welcome'}})
            })
            .catch(err =>{ console.log(err)})
        }
        onMounted(()=>{

            let user = getSession('user');
            if(user != null){
                router.push({ name: 'UserDashboardIndex' })
            }

        })


        return {v$, userData,submitLogin}

    },
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                this.submitLogin();
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
