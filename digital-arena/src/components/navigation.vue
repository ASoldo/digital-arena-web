<template>
  <div class="relative">
    <div class="fixed w-full z-50">
      <div class="p-1 m-2">
        <div class="navbar rounded-xl backdrop-blur-2xl" data-aos="fade-down" data-aos-delay="125">
          <div class="navbar-start">
            <div class="dropdown" @click="handleMenuState()">
              <label tabindex="0" class="btn btn-ghost btn-circle text-logo-color">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 backdrop-blur-2xl bg-transparent glass">
                <li :class="{ bordered: isActive('home') }">
                  <router-link class="hover:text-white hover:bg-violet-900 text-white bg-logo-color" to="/"
                    @click="handleSelected">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>Home</router-link>
                </li>
                <li :class="{ bordered: isActive('open jobs') }">
                  <router-link class="hover:text-white hover:bg-violet-900 text-white bg-logo-color mt-1"
                    to="/open-jobs" @click="handleSelected">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Open Jobs</router-link>
                </li>
                <!-- <li><a>About</a></li> -->
              </ul>
            </div>
          </div>
          <div class="navbar-center">
            <!-- <a class="btn btn-ghost normal-case text-xl">Digital Arena</a> -->
            <img class="link" @click="scrollToTop()" height="30px" style="height: 30px" src="../assets/digitalarena.png"
              alt="digital-arena" />
          </div>
          <div class="navbar-end">
            <!-- <button class="btn btn-ghost btn-circle"> -->
            <!--   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" -->
            <!--     stroke="currentColor"> -->
            <!--     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" -->
            <!--       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> -->
            <!--   </svg> -->
            <!-- </button> -->
            <!-- <button class="btn btn-ghost btn-circle"> -->
            <!--   <div class="indicator"> -->
            <!--     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" -->
            <!--       stroke="currentColor"> -->
            <!--       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" -->
            <!--         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> -->
            <!--     </svg> -->
            <!--     <span class="badge badge-xs badge-primary indicator-item"></span> -->
            <!--   </div> -->
            <!-- </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const enableDropdownHover = ref(true);
const isMenuActive = ref(false);
const handleSelected = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  enableDropdownHover.value = false;
};
const handleMenuState = () => {
  if (document.activeElement instanceof HTMLElement && isMenuActive.value) {
    document.activeElement.blur();
    isMenuActive.value = false;
  } else {
    isMenuActive.value = true;
  }
};
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const router = useRoute();
// Now you can access params like:
const isActive = (route: any) => {
  if (route == router.name) {
    return computed(() => {
      return true;
    });
  }
};
</script>
