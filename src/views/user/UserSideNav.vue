<template>
  <div class="flex-shrink-0 p-3 bg-color1" style="height: 100%;">
    <div class="nav-container-1">
        <router-link class="router-link" :to="{name:'UserDashboardIndex'}">
            <div class="link">
                <div class="text" >Home</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserHistoryIndex'}">
            <div class="link">
                <div class="text">History</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserWithdrawIndex'}">
            <div class="link">
                <div class="text">Payout</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserDepositIndex'}">
            <div class="link">
                <div class="text">Deposit</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserRulesIndex'}">
            <div class="link">
                <div class="text">Rules</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserPasswordIndex'}">
            <div class="link">
                <div class="text">Password</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'UserAccountIndex'}">
            <div class="link">
                <div class="text">Profile</div>
            </div>
        </router-link>
        <router-link  class="router-link" :to="{name:'Login'}">
            <div class="link">
                <div class="text">Logout</div>
            </div>
        </router-link>
    </div>
      <!-- <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
        <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-5 fw-semibold text-gold text-nowrap mx-auto">Golden Buzzer</span>
      </a>
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
            <router-link :to="{name:'UserDashboardIndex'}" class="btn btn-toggle align-items-center text-nowrap"><i class="icon-size las la-tachometer-alt"></i><span>Home</span></router-link>
        </li>
        <li class="border-top my-3"></li>

        <li class="mb-1">
            <router-link :to="{name:'UserHistoryIndex'}" class="btn btn-toggle align-items-center"><i class="icon-size las la-scroll"></i>History</router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name:'UserWithdrawIndex'}" class="btn btn-toggle align-items-center"><i class="icon-size las la-hand-holding-usd"></i>Payout</router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name:'UserDepositIndex'}" class="btn btn-toggle align-items-center"><i class="icon-size las la-donate"></i> Deposit</router-link>
        </li>
        
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <router-link :to="{name:'UserRulesIndex'}" class="btn btn-toggle align-items-center rounded " >
            <i class="icon-size las la-info"></i>Rules
          </router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name:'UserPasswordIndex'}" class="btn btn-toggle align-items-center rounded " >
            <i class="icon-size las la-user-lock"></i>Change Password
          </router-link>
        </li>
        <li class="mb-1">
          <router-link :to="{name:'UserAccountIndex'}" class="btn btn-toggle align-items-center rounded " >
            <i class="icon-size las la-user-alt"></i>Account Details
          </router-link>
        </li>
        <li class="mb-1" @click="signOut">
          <button class="btn btn-toggle align-items-center rounded " >
            <i class="icon-size las la-sign-out-alt"></i>Logout
          </button>
        </li>
      </ul> -->
    </div>
</template>

<script>
import GlobalMixins from '@/components/GlobalMixins';
export default {
    setup(){
        const { signOut, } = GlobalMixins();

        return {signOut}

    },
  
    data() {
      return {
        menu: [
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/charts',
            title: 'Charts',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.router-link{
    text-decoration: none;
}

.nav-container{
    font-family: 'Raleway', sans-serif;
    color:#FFF;
    // background:rgba(0, 0, 0, 0.75);
    margin:40px auto;
    padding:10px 0px 20px 0px;
    border:1px solid #111;
    border-radius:4px;
    box-shadow:0px 4px 5px rgba(0, 0, 0, 0.75);
}

.link{
   font-size:16px;
   font-weight:300;
   text-align:center;
   position:relative;
   height:40px;
   line-height:40px;
   margin-top:10px;
   overflow:hidden;
//    width:90%;
//    margin-left:5%;
   cursor:pointer;
}
.link:after{
   content: '';
   position:absolute;
   width:80%;
   border-bottom:1px solid rgba(255, 255, 255, 0.5);
   bottom:50%;
   left:-100%;
   transition-delay: all 0.5s;
   transition: all 0.5s;
}
.link:hover:after,
.link.hover:after{
   left:100%;
}
.link .text{
   text-shadow:0px -40px 0px rgba(255, 255, 255, 1);
   transition:all 0.75s;
   transform:translateY(100%) translateZ(0);
   transition-delay:all 0.25s;
   font-size: .8rem;
}
.link:hover .text,
.link.hover .text{
   text-shadow:0px -40px 0px rgba(255, 255, 255, 0);
   transform:translateY(0%) translateZ(0) scale(1.1);
//    font-weight:600;
   font-size: .8rem;
   color: $gold;
}
.icon-size{
  font-size: 25px;
}

.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color:$colorwhite;
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: $colorwhite70;
}

// .btn-toggle::before {
//   width: 1.25em;
//   line-height: 0;
//   content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
//   transition: transform .35s ease;
//   transform-origin: .5em 50%;
// }

.btn-toggle[aria-expanded="true"] {
  color: $colorwhite;
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold { font-weight: 600; }
.lh-tight { line-height: 1.25; }



</style>