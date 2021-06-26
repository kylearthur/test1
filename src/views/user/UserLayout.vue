<template>
    <!-- <div id="view" :class="[{'collapsed' : collapsed}]">
        <header class="navbar navbar-dark sticky-top bg-color1 flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Golden Buzzer</a> -->
            <!-- <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
            <!-- <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <a class="nav-link" href="#"  @click="triggerToggle"><i class="las la-align-justify text-colorwhite"></i></a>
                </li>
            </ul> -->
        <!-- </header>
        
      <router-view/>
    </div> -->
    <!-- <sidebar-menu :menu="menu" /> -->
    <main class="row g-0">
    <div class="col-1 p-0 d-md-block d-none ">
      <UserSideNav/>
    </div>
    <div class="col-md-11 col-sm-12 vh-100  ">
      <router-view></router-view>
    </div>
    </main>
</template>

<script>
import UserSideNav from './UserSideNav.vue';
export default {
  components:{UserSideNav},
    data() {
        return {
        collapsed: true,
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
        };
    },
    methods: {
    onItemClick(e, i) {
      // console.log(e,i);
      const title = i.title
      console.log(title)
      if(title == 'Sign out'){ 
        this.$session.destroy()
        this.$router.push('/')
      }
      if(title == 'Langkaan'){
        window.location.reload()
      }
      if(title == 'West wood'){
        window.location.reload()
      }
      if(title == 'Rd'){
        window.location.reload()
      }
    },
    onCollapse(c) {
      console.log("onCollapse");
      this.collapsed = c;
    },
    triggerToggle(){
        document.getElementsByClassName("vsm--toggle-btn")[0].click();
    }
  }


}
</script>

<style lang="scss">
@import "@/style/variables.scss";

main {
  display: flex;
  flex-wrap: nowrap;
  // height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  // overflow-x: auto;
  // overflow-y: hidden;
  min-height: 100vh!important;
  min-height: -webkit-fill-available;
  width: 100%;

}





</style>