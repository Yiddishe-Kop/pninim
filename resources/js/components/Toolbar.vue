<template>
  <section class="flex flex-col space-y-4 text-sm font-bold text-gray-800">
    <div class="space-y-2 leading-tight">
      <p class="font-semibold">הפונט הפרמטרי העברי המשוכלל בעולם 🌍 .</p>
      <p class="font-normal">נסו לשחק עם הפרמטרים 💡</p>
    </div>
    <div>
      <div class="flex items-center justify-between">
        <span>עובי</span>
        <span class="text-gray-600">{{ weight }}</span>
      </div>
      <vue-slider tooltip="none" v-model="weight" direction="rtl" :min="100" :max="900"></vue-slider>
    </div>
    <div class="relative z-10">
      <div class="flex items-center justify-between">
        <span>רוחב</span>
        <span class="text-gray-600">{{ width }}</span>
      </div>
      <vue-slider tooltip="none" v-model="width" direction="rtl" :min="100" :max="900"></vue-slider>
    </div>
    <div class="relative z-0 w-full pt-4 pb-8 overflow-x-auto no-scrollbar">
      <p class="text-6xl leading-10 font-siddur" :style="`font-variation-settings: 'wght' ${weight}, 'wdth' ${width};`">
        אבגדה וזחטיכ למנסע פצקרש תךםןץ
      </p>
    </div>
    <p class="text-xs font-normal text-gray-600">
      &copy; 2020 <a href="https://yiddishe-kop.com" target="_blank" class="underline">יידישע קאפ</a>
    </p>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'Toolbar',
  components: { VueSlider },
  data() {
    return {
      weight: 600,
      width: 100,
    };
  },
  watch: {
    weight(weight) {
      document.documentElement.style.setProperty('--siddur-weight', weight);
    },
    width(width) {
      document.documentElement.style.setProperty('--siddur-width', width);
    },
  },
};
</script>

<style>
</style>
