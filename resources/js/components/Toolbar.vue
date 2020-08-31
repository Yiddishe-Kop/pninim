<template>
  <section class="flex flex-col space-y-4 text-sm font-bold text-gray-800">
    <button @click="open = !open" class="flex items-center justify-between w-full p-2 bg-gray-100 rounded shadow">
      <span class="flex items-center justify-between">
        <icon name="cog" class="w-6 text-gray-600" />
        <span class="mr-1.5 text-gray-700 text-lg">הגדרות</span>
      </span>
      <icon name="cheveron-down" class="w-6 text-gray-500 transition transform" :class="{ 'rotate-180': open }" />
    </button>
    <div v-if="open">
      <div class="space-y-2 leading-tight">
        <p class="font-semibold">הפונט הפרמטרי העברי המשוכלל בעולם.</p>
        <p class="font-normal">נסו לשחק עם הפרמטרים:</p>
      </div>
      <div class="mt-6">
        <div class="flex items-center justify-between">
          <span>עובי</span>
          <span class="text-gray-600">{{ weight }}</span>
        </div>
        <vue-slider tooltip="none" v-model="weight" direction="rtl" :min="100" :max="900"></vue-slider>
      </div>
      <div class="relative z-10">
        <div class="flex items-center justify-between">
          <span>אותיות מתרחבות</span>
          <span class="text-gray-600">{{ width }}</span>
        </div>
        <vue-slider tooltip="none" v-model="width" direction="rtl" :min="100" :max="900"></vue-slider>
      </div>
      <div class="relative z-0 w-full pt-4 pb-8 mt-4 overflow-x-auto no-scrollbar">
        <p class="relative mt-2 text-xs text-gray-600 bottom-4">תצוגה מקדימה:</p>
        <p
          class="text-6xl leading-10 font-siddur"
          :style="`font-variation-settings: 'wght' ${weight}, 'wdth' ${width};`"
        >
          אבגדה וזחטיכ למנסע פצקרש תךםןץ
        </p>
      </div>
      <p class="text-xs font-normal text-gray-600">
        &copy; 2020 <a href="https://yiddishe-kop.com" target="_blank" class="underline">יידישע קאפ</a>
      </p>
    </div>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component';

export default {
  name: 'Toolbar',
  components: { VueSlider },
  data() {
    return {
      open: false,
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
