<template>
  <section class="flex flex-col space-y-2 text-sm font-bold text-gray-800">
    <button
      @click="open.daf = !open.daf"
      class="flex items-center justify-between w-full p-2 bg-gray-100 rounded shadow"
    >
      <span class="flex items-center justify-between">
        <icon name="book-open" class="w-6 text-gray-600" />
        <span class="mr-1.5 text-gray-700 text-lg">דף היומי</span>
      </span>
      <icon name="cheveron-down" class="w-6 text-gray-500 transition transform" :class="{ 'rotate-180': open.daf }" />
    </button>
    <div v-if="open.daf" class="p-2 bg-gray-100 rounded shadow">
      <p class="text-gray-500">הדף של היום</p>
      <p class="pt-2 pb-3 text-4xl font-siddur">{{ dafYomi }}</p>
    </div>
    <button
      @click="open.settings = !open.settings"
      class="flex items-center justify-between w-full p-2 bg-gray-100 rounded shadow"
    >
      <span class="flex items-center justify-between">
        <icon name="cog" class="w-6 text-gray-600" />
        <span class="mr-1.5 text-gray-700 text-lg">הגדרות</span>
      </span>
      <icon
        name="cheveron-down"
        class="w-6 text-gray-500 transition transform"
        :class="{ 'rotate-180': open.settings }"
      />
    </button>
    <div v-if="open.settings" class="p-2 bg-gray-100 rounded shadow">
      <div class="mt-2 space-y-2 leading-tight">
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
      <div class="relative z-10 mt-2">
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
import debounce from 'lodash/debounce';

export default {
  name: 'Toolbar',
  components: { VueSlider },
  data() {
    return {
      open: {
        daf: false,
        settings: false,
      },
      weight: 600,
      width: 100,
      dafYomi: '???',
    };
  },
  watch: {
    weight(weight) {
      document.documentElement.style.setProperty('--siddur-weight', weight);
      this.saveSetting('siddur-weight', weight);
    },
    width(width) {
      document.documentElement.style.setProperty('--siddur-width', width);
      this.saveSetting('siddur-width', width);
    },
  },
  methods: {
    saveSetting: debounce(function (name, value) {
      localStorage.setItem(name, value);
    }, 1000),
    getSetting() {
      const savedWeight = localStorage.getItem('siddur-weight');
      const savedWidth = localStorage.getItem('siddur-width');
      if (savedWeight !== null) {
        this.weight = Number(savedWeight);
      }
      if (savedWidth !== null) {
        this.width = Number(savedWidth);
      }
    },
  },
  created() {
    this.getSetting();
  },
  async mounted() {
    const res = await (await fetch('https://www.sefaria.org/api/calendars')).json();
    const dafYomi = res.calendar_items.find((i) => i.title.en == 'Daf Yomi');
    this.dafYomi = dafYomi.displayValue.he;
  },
};
</script>
