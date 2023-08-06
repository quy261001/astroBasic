<template>
  <nav
    class="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32"
  >
    <svg
      class="absolute -bottom-1/2 left-1/2 -translate-x-1/2"
      width="250"
      height="{4}"
      viewBox="0 0 250 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L428 2"
        stroke="#282828"
        stroke-linecap="round"
        stroke-width="{2}"
      ></path>
    </svg>
  
    <div class="flex items-center space-x-2">
      <img :src="avatar" alt="Profile picture of Hua" />
      <div class="icon_img flex space-x-3">
        <img :src="dribble" alt="">
        <img :src="youtube" alt="">
        <img :src="twitter" alt="">
    </div>
    </div>
    
    <h1 class="text-lg font-bold">
      <a href="/">Hua.</a>
    </h1>

    <div class="space-y-1 cursor-pointer xl:hidden" @click="showNav = !showNav">
      <span class="block h-0.5 w-8 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-4 bg-black"></span>
    </div>
  </nav>
</template>

<script setup>
import {ref} from 'vue'
import avatar from "/avatar.png";
import twitter from "/twitter.png";
import youtube from "/youtube.png";
import dribble from "/dribble.png";

const showNav = ref(false);
</script>
<style scoped>
    .icon_img {
        width: 30px;
        height: 30px;
    }
</style>
