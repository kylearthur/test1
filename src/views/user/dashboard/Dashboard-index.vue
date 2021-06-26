<template>
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-lg-9 col-md-12">
                <div class="row g-0">
                    <div class="col-12 vh-5 ">
                         <h3 class="title-style1 text-sm  mb-0">Matira matibay 12 Cock Derby (4-cock finals) set A gap Laguna MBC 3 Elims Set B Total Fights</h3>
                    </div>
                    <!-- /.col header title -->
                    <div class="col-12 vh-60 bg-dark">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hFxqbOcyk78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <!-- /.col video -->
                    <div class="col-12 vh-35 bg-dark">
                        <div class=" table-responsive ">
                            <table class="table table-dark table-bordered border-light table-sm mb-0 table-xs">
                                <tbody>
                                    <tr class="table-dark text-xs">
                                        <td class="" >Betting <span class="badge bg-success">Open</span></td>
                                        <td class="" >Fight <span class="badge bg-success">#63</span></td>
                                    </tr>
                                    <tr class="table-dark text-xs">
                                        <td><p class="text-colorwhite text-nowrap mb-0"><span class="badge bg-primary ">Meron</span>  ₱ 320,978 </p></td>
                                        <td><p class="text-colorwhite text-nowrap mb-0"><span class="badge bg-danger ">Wala</span>  ₱ 320,978 </p></td>
                                    </tr>
                                    <tr class="table-dark text-xs">
                                        <td>
                                            <p class="text-colorwhite text-nowrap mb-0">Payout = ₱ 320,978 </p>
                                            <p class="text-colorwhite text-nowrap mb-0">₱ 0 </p>
                                        </td>
                                        <td>
                                            <p class="text-colorwhite text-nowrap mb-0">Payout = ₱ 967,978 </p>
                                            <p class="text-colorwhite text-nowrap mb-0">₱ 36,000 </p>
                                        </td>
                                    </tr>
                                    <tr class="table-dark text-xs">
                                        <td><button class="btn btn-danger btn-sm text-nowrap"><i class="las la-plus-square"></i> Add</button></td>
                                        <td><button class="btn btn-primary btn-sm text-nowrap"><i class="las la-plus-square"></i> Add</button></td>
                                    </tr>
                                    <tr class="table-dark text-xs">
                                        <td class="" >
                                            <div class="text-end mb-2">
                                                <span class="text-nowrap ">Current Points</span> <span class="badge bg-warning text-color1">{{currentPoinst}} </span>
                                            </div>
                                            <div class="input-group input-group-sm">
                                            <input type="text" class="form-control" placeholder="Amount" aria-label="Recipient's username" aria-describedby="button-addon2">
                                            <button class="btn btn-outline-warning" type="button" id="button-addon2">clear</button>
                                            </div>
                                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                <a type="button" class="text-xs mx-1 text-light text-decoration-none">100</a>
                                                <a type="button" class="text-xs mx-1 text-light text-decoration-none">500</a>
                                                <a type="button" class="text-xs mx-1 text-light text-decoration-none">1500</a>
                                                <a type="button" class="text-xs mx-1 text-light text-decoration-none">2000</a>
                                                <a type="button" class="text-xs mx-1 text-light text-decoration-none">3000</a>
                                            </div>
                                        </td>
                                        <td  class="">
                                            <div class="input-group flex-nowrap input-group-sm mb-1">
                                            <span class="input-group-text" id="addon-wrapping">₱</span>
                                            <input type="text" class="form-control" placeholder="0" aria-label="Username" aria-describedby="addon-wrapping">
                                            </div>
                                            <button type="button" class="btn btn-outline-light btn-sm"><i class="las la-plus-square"></i>Bet Draw</button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.col video -->
                </div>
                <!-- /.row  -->
            </div>
            <!-- /. left side -->
            <div class="col-lg-3 col-md-12">
                <div class="row g-0">
                    <div class="col-12">
                        <div class="row g-0">
                            <div class="col-12 bg-dark ">
                                <div id="cur-fight" class="badge rounded-pill m-1 " :class="{flipOutX: ani}">
                                        <h3 class="title-style1 p-2" @click="addAnimation()">Current Fight #21</h3>
                                </div>
                            </div>
                            <!-- header fight -->
                            <div class="col-12 ">
                                <div class="table-responsive">
                                    <table class="table table-dark table-bordered border-light mb-0">
                                        <tbody>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="fight-box" v-for="data in laban" :key="data.id">
                                                <div class="row g-0">
                                                    <div class="col-12 text-end">
                                                     <span class="fight-id  badge bg-secondary  text-dark">#{{data.id}}</span>
                                                    </div>
                                                    <div class="col-12">
                                                         <div>
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m1"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                        <title>Placeholder</title>
                                                        </svg>
                                                            vs
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                            <title>Placeholder</title>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </div>
                                               
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="fight-box" v-for="data in laban" :key="data.id">
                                                <div class="row g-0">
                                                    <div class="col-12 text-end">
                                                     <span v-if="data.id == 1" class="fight-id  badge bg-success  text-light">#{{data.id +20}}</span>
                                                     <span v-else class="fight-id  badge bg-warning  text-dark">#{{data.id +20}}</span>
                                                    </div>
                                                    <div class="col-12">
                                                         <div>
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m1"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                        <title>Placeholder</title>
                                                        </svg>
                                                            vs
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                            <title>Placeholder</title>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </div>
                                               
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="fight-box" v-for="data in laban" :key="data.id">
                                                <div class="row g-0">
                                                    <div class="col-12 text-end">
                                                     <span class="fight-id  badge bg-warning  text-dark">#{{data.id +30}}</span>
                                                    </div>
                                                    <div class="col-12">
                                                         <div>
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m1"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                        <title>Placeholder</title>
                                                        </svg>
                                                            vs
                                                            <svg class="bd-placeholder-img-chicken rounded-circle m2" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                            <title>Placeholder</title>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </div>
                                               
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-dark table-bordered border-light mb-0 table-sm">
                                        <tbody>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="" v-for="data in laban" :key="data.id">
                                                <div>
                                                    <div class="circle-butas-red">
                                                        <div class="inner"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="" v-for="data in laban" :key="data.id">
                                                <!-- <div>
                                                    <svg class="bd-placeholder-img rounded-circle m1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                    <title>Placeholder</title>
                                                    <rect width="100%" height="100%" fill="#198754"></rect>
                                                    </svg>
                                                </div> -->
                                                <div>
                                                <div class="circle-butas-green">
                                                        <div class="inner"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td  class=""  v-for="data in laban" :key="data.id">
                                                <!-- <div class="">
                                                <svg class="bd-placeholder-img rounded-circle m1" width="20" height="20" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                    <title>Placeholder</title>
                                                    <rect width="100%" height="100%" fill="#DC3545"></rect>
                                                    </svg>
                                                </div> -->
                                                <div>
                                                    <div class="circle-butas-blue">
                                                        <div class="inner"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td  class=""  v-for="data in laban" :key="data.id">
                                                <div>
                                                    <div class="circle-butas-blue">
                                                        <div class="inner"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td  class=""  v-for="data in laban" :key="data.id">
                                                <div>
                                                    <div class="circle-butas-blue">
                                                        <div class="inner"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-12">
                                <div class="card text-light bg-dark">
                                    <div class="card-body">
                                        <span class="badge bg-danger m-2">50</span>
                                        <span class="badge bg-success m-2">80</span>
                                        <span class="badge bg-warning m-2">32</span>
                                        <span class="badge bg-light text-dark m-2">60</span>

                                    </div>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-dark table-bordered border-light mb-0 table-sm">
                                        <tbody>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="" v-for="data in laban" :key="data.id">
                                                <div class="circle-butas-num-green">
                                                    {{ data.id }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td class="" v-for="data in laban" :key="data.id">
                                                <div class="circle-butas-num-blue">
                                                   {{ data.id +20 }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td  class=""  v-for="data in laban" :key="data.id">
                                                <div class="circle-butas-num-red">
                                                  {{ data.id +30 }}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="table-dark" v-if="laban">
                                            <td  class=""  v-for="data in laban" :key="data.id">
                                                <div class="circle-butas-num-green">
                                                    <div class="inner">{{ data.id +40 }}</div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- /.col -->
                        </div>
                    </div>
                </div>
                <!-- /.row  -->
            </div>
            <!-- /. right side -->
        </div>
    </div>

    <!-- <div class="row g-0">
        <div class="col-6">
            <h3 class="m-1">Betting<span class="badge bg-success rounded-pill">Open</span></h3>
            <span class="badge bg-primary rounded-pill text-sm">Meron</span>
            <p class="text-colorwhite text-nowrap">₱ 320,978 </p>
        </div>
        <div class="col-6">
            <h3 class="m-1">Fight<span class="badge bg-success rounded-pill">#30</span></h3>
            <span class="badge bg-danger text-sm rounded-pill">Meron</span>
            <p class="text-colorwhite text-nowrap">₱ 320,978 </p>
        </div>
    </div> -->
</template>

<script>
import { onMounted } from 'vue-demi';
import { useRouter } from 'vue-router';
import GlobalMixins from '@/components/GlobalMixins';
export default {
    name:"DashboardIndex",
    
    data(){
        return{
            selected: null,
            meron:0,
            wala:0,
            currentPoinst:5450,
            ani: false,
            country :['ph','wh', 'eh'],
            laban:[
                {
                    'id':1,
                    'time':'4:15 PM',
                },
                {
                    'id':2,
                    'time':'4:15 PM',
                },
                {
                    'id':3,
                    'time':'4:15 PM',
                },
                {
                    'id':4,
                    'time':'4:15 PM',
                },
                {
                    'id':5,
                    'time':'4:15 PM',
                },
                {
                    'id':6,
                    'time':'4:15 PM',
                },
                {
                    'id':7,
                    'time':'4:15 PM',
                },
                {
                    'id':8,
                    'time':'4:15 PM',
                },
                {
                    'id':9,
                    'time':'4:15 PM',
                },
                {
                    'id':10,
                    'time':'4:15 PM',
                },
                {
                    'id':11,
                    'time':'4:15 PM',
                },
                {
                    'id':12,
                    'time':'4:15 PM',
                },
                {
                    'id':13,
                    'time':'4:15 PM',
                },
            ]

        }
    },
    setup(){
        const router = useRouter()
        const { showToast, } = GlobalMixins();
        onMounted(()=>{
            const msg = router.currentRoute.value.query.flash
            if(msg){
                showToast(msg,{
                    position: 'top-center',
                    type: 'success',
                    timeout: 3000
                })
            }
            router.replace({name:'UserDashboardIndex'})
        })
    },
    methods:{
        addFunds(){

        },
        addAnimation(){
            this.ani = !this.ani;
            setTimeout(()=>{
            this.ani = !this.ani;
            },2000)
        },
        search(input) {
            if (input.length < 1) { return [] }
            return countries.filter(country => {
                return country.toLowerCase()
                .startsWith(input.toLowerCase())
            })
        }

    },
}
</script>

<style lang="scss">
@import "@/style/flip_x.scss";
@import "@/style/flip_2.scss";
@import "@/style/variables.scss";

.center-hastag{
    position: absolute;
    transform: translate(-4px, 0px);
}
.m1{
  background-image: url("~@/assets/m1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.m2{
  background-image: url("~@/assets/m2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pr-0{
    padding-right: 0!important;
}
.bottom-controller{
    margin-top: -16px;
}
.daya-margin{
    margin-top: -10px;
    width: 1296px;
    margin-left: 145px;
}
.daya-margin2{
    margin-top: 1px;
    width: 1129px;
    height: 390px;
}
.daya-margin3{
    margin: 0 0 0 155px;
    width: 490px;
    height: 451px;
}
.center-label{
    margin: 50% 0;
}


@media (min-width: 576px) {  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {  }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {  
    
}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {  
    .table-xs >tbody>tr>td {
        padding: .20rem;
    }
    .title-style1 {
        font-size: 1rem;
    }
    .fight-box {
        min-width: 110px;
        height: 70px;
    }
    .bd-placeholder-img-chicken {
        height: 20px;
        width: 20px;
    }
    .fight-id{
        font-size: .6rem;
    }
$cb: 20px;
$icb:10px;    
$cbt: translate(5px, 5px);
    .circle-butas-red{
        width: $cb;
        height: $cb;
        background: rgb(255, 0, 0);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: $icb;
            height: $icb;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-blue{
        width: $cb;
        height: $cb;
        background: rgb(0, 110, 255);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: $icb;
            height: $icb;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-green{
        width: $cb;
        height: $cb;
        background: rgb(0, 255, 55);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: $icb;
            height: $icb;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }

$resNumSize:22px;
$lH: 3.5vh;
    .circle-butas-num-green{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: rgb(0, 0, 0);
        text-align: center;
        background: rgb(0, 255, 55);
        width: $resNumSize;
        height: $resNumSize;
        font-weight: 600;
    }
    .circle-butas-num-blue{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(0, 110, 255);
        font-weight: 600;
        
    }
    .circle-butas-num-red{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(255, 0, 0);
        font-weight: 600;
    }
}

// XX-Large devices (larger desktops, 1500px and up)

@media (min-width: 1500px) { 
    .fight-box {
        min-width: 160px;
        height: 82px;
    }
    .bd-placeholder-img-chicken {
        height: 30px;
        width: 30px;
    }
    .bd-placeholder-img-num{
        height: 40px;
        width: 40px;
    }
$cb: 30px;    
$cbt: translate(8px, 8px);
    .circle-butas-red{
        width: $cb;
        height: $cb;
        background: rgb(255, 0, 0);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-blue{
        width: $cb;
        height: $cb;
        background: rgb(0, 110, 255);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-green{
        width: $cb;
        height: $cb;
        background: rgb(0, 255, 55);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }


$resNumSize:30px;
$lH: 4vh;
    .circle-butas-num-green{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: rgb(0, 0, 0);
        text-align: center;
        background: rgb(0, 255, 55);
        width: $resNumSize;
        height: $resNumSize;
        font-weight: 600;
    }
    .circle-butas-num-blue{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(0, 110, 255);
        font-weight: 600;
        
    }
    .circle-butas-num-red{
        line-height: $lH;
        border-radius: 50%;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(255, 0, 0);
        font-weight: 600;
    }
}
// XX-Large devices (larger desktops, 1600px and up)
@media (min-width: 1600px) {

    .fight-box {
        min-width: 200px;
         height: 120px;
    }  
    .bd-placeholder-img-chicken {
        height: 50px;
        width: 50px;
    }
    .bd-placeholder-img-num{
        height: 40px;
        width: 40px;
    }
    .center-hastag {
        position: absolute;
        transform: translate(-5px, 0px);
    }
    .fight-id {
        font-size: .8rem;
    }
    .title-style1 {
        font-size: 1.2rem;
    }
$cb: 35px;    
$cbt: translate(10px, 10px);
    .circle-butas-red{
        width: $cb;
        height: $cb;
        background: rgb(255, 0, 0);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-blue{
        width: $cb;
        height: $cb;
        background: rgb(0, 110, 255);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
    .circle-butas-green{
        width: $cb;
        height: $cb;
        background: rgb(0, 255, 55);
        border-radius: 50%;
        // margin: 20px auto;
        .inner{
            width: 15px;
            height: 15px;
            background: #212529;
            border-radius: 50%;
            transform: $cbt;
        }
    }
$resNumSize:40px;
$lH: 4vh;
    .circle-butas-num-green{
        line-height: $lH;
        border-radius: 50%;
        font-size: 1rem;
        color: rgb(0, 0, 0);
        text-align: center;
        background: rgb(0, 255, 55);
        width: $resNumSize;
        height: $resNumSize;
        font-weight: 600;
    }
    .circle-butas-num-blue{
        line-height: $lH;
        border-radius: 50%;
        font-size: 1rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(0, 110, 255);
        font-weight: 600;
        
    }
    .circle-butas-num-red{
        line-height: $lH;
        border-radius: 50%;
        // font-size: .8rem;
        color: #fff;
        text-align: center;
        width: $resNumSize;
        height: $resNumSize;
        background: rgb(255, 0, 0);
        font-weight: 600;
    }
    


   
}
</style>