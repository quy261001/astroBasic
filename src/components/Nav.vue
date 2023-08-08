<template>
  <nav
    class="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32"
  >
    <div class="flex items-center space-x-2">
      <img :src="avatar" alt="Profile picture of Hua" />
    </div>

    <h1 class="text-lg font-bold">
      <a href="/">Hua.</a>
    </h1>

    <div class="space-y-1 cursor-pointer" @click="showModal = true">
      <span class="block h-0.5 w-8 bg-black"></span>
      <span class="block h-0.5 w-6 bg-black"></span>
      <span class="block h-0.5 w-4 bg-black"></span>
    </div>
  </nav>
  <div>
    <div v-if="showModal" @click="closeModal" class="modal w-20">
      <div class="modal-content">
        <span class="close">&times;</span>
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            class="flex flex-col items-center space-y-20 text-3xl mb-20 font-bold"
          >
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <div class="flex space-x-24">
            <div v-for="(item, index) in ArrayIcon" :key="index">
              <img :src="item.icon" :alt="item.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let avatar = '/avatar.png';
let test = 'abc';
console.log('Navigation');
const ArrayIcon = [
  {
    icon: '/twitter.png',
    alt: 'twitter',
  },
  {
    icon: '/youtube.png',
    alt: 'youtube',
  },
  {
    icon: '/dribble.png',
    alt: 'dribble',
  },
];
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
</script>
<style scoped>
.icon_img {
  width: 30px;
  height: 30px;
}

.modal-background {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Modal content */
.modal-content {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Close button */
.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

/* Additional styles to center the content inside the modal */
.modal-content h2,
.modal-content p {
  text-align: center;
}
</style>
