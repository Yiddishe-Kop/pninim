<template>
  <section v-show="tractates && tractates.length" class="z-50 flex pointer-events-none select-none">
    <div class="p-1 overflow-hidden bg-teal-500 rounded-lg shadow-2xl pointer-events-auto">
      <span class="absolute z-0 w-4 h-4 transform rotate-45 -translate-y-1/2 bg-teal-500 right-20"></span>
      <div class="relative z-10 overflow-hidden bg-white rounded">
        <transition v-if="tractates.length" :name="goingForward ? 'slide-in' : 'slide-back'">
          <!-- TRACTATES -->
          <ul
            v-if="selected.tractate == undefined"
            key="tractates"
            class="p-1 space-y-1 overflow-y-auto custom-scrollbar max-h-60"
          >
            <li
              v-for="(tractate, i) in tractates"
              :key="tractate"
              @click="goForward('tractate', i)"
              :class="[selected.tractate == i ? 'bg-blue-200 hover:bg-blue-300' : 'bg-gray-100 hover:bg-teal-200']"
              class="flex items-center justify-between px-3 py-2 text-gray-900 bg-gray-100 rounded outline-none cursor-pointer focus:shadow-outline-teal hover:text-teal-900"
              tabindex="0"
            >
              <span class="text-3xl font-bold font-siddur">{{ tractate }}</span>
              <span class="mr-2">
                <badge>{{ numToDaf(dafim[i].length) }} דפים</badge>
                <icon name="cheveron-right" class="inline w-4 -ml-1 transform rotate-180" />
              </span>
            </li>
          </ul>
          <!-- DAFIM -->
          <ul v-else-if="selected.daf == undefined" key="dafim">
            <div
              @click="goBack('tractate')"
              class="flex items-center px-3 py-2 bg-teal-700 cursor-pointer text-teal-50"
            >
              <icon name="cheveron-right" class="inline w-4" />
              <span class="mr-2 font-bold">{{ selectedTractate }}</span>
            </div>
            <div class="p-1 space-y-1 overflow-y-auto custom-scrollbar max-h-60">
              <li
                v-for="(daf, i) in dafim[selected.tractate]"
                :key="`${i}-${daf}`"
                @click="goForward('daf', i)"
                :class="[selected.daf == i ? 'bg-blue-200 hover:bg-blue-300' : 'bg-gray-100 hover:bg-teal-200']"
                class="flex items-center justify-between px-3 py-2 text-gray-900 bg-gray-100 rounded outline-none cursor-pointer focus:shadow-outline-teal hover:text-teal-900"
                tabindex="0"
              >
                <span class="text-3xl font-bold font-siddur">{{ numToDaf(i) }}</span>
                <span class="mr-12">
                  <badge>{{ daf }} חלקים</badge>
                  <icon name="cheveron-right" class="inline w-4 -ml-1 transform rotate-180" />
                </span>
              </li>
            </div>
          </ul>
          <!-- SECTIONS -->
          <article v-else key="sections">
            <div @click="goBack('daf')" class="flex items-center px-3 py-2 bg-teal-700 cursor-pointer text-teal-50">
              <icon name="cheveron-right" class="inline w-4" />
              <span class="mr-2 font-bold">{{ selectedTractate }}</span>
              <span class="mr-2">/</span>
              <span class="mr-2 font-bold">{{ selectedDaf }}</span>
            </div>
            <div v-if="!sections || !sections.length" class="px-48 py-12">
              <loader />
            </div>
            <p
              v-else
              class="p-4 pt-2 overflow-y-auto text-xl leading-8 text-justify text-gray-900 custom-scrollbar max-h-60"
            >
              <span
                v-for="(section, i) in sections"
                :key="`${i}-${section.slice(0, 10)}`"
                @click="select(i)"
                :class="[selected.section == i ? 'bg-blue-200 hover:bg-blue-300' : 'hover:bg-teal-200']"
                class="px-1.5 mx-0.5 py-1 rounded outline-none cursor-pointer font-sbl hover:text-teal-900"
                v-html="section"
              >
              </span>
            </p>
          </article>
        </transition>
        <div v-else class="w-56 py-16">
          <div v-if="error">
            <p class="text-xs text-center text-teal-700">לא הצלחנו להתחבר לספריא</p>
          </div>
          <div v-else>
            <loader />
            <p class="mt-3 text-xs text-center text-teal-700">טוען הש״ס</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SourceSelectModal',
  data() {
    return {
      tractates: [],
      dafim: [],
      sections: [],
      selected: {
        tractate: undefined,
        daf: undefined,
        section: undefined,
      },
      goingForward: true,
      error: undefined,
    };
  },
  computed: {
    selectedTractate() {
      if (this.selected.tractate === undefined) return;
      return this.tractates[this.selected.tractate];
    },
    selectedDaf() {
      if (this.selected.daf === undefined) return;
      return this.numToDaf(this.selected.daf);
    },
  },
  methods: {
    goForward(section, i) {
      this.goingForward = true;
      this.selected[section] = i;
    },
    goBack(section) {
      this.goingForward = false;
      this.selected[section] = undefined;
    },
    select(i) {
      this.selected.section = i;
      this.$emit('select', {
        ref: `${this.selectedTractate} ${this.selectedDaf}`, //:${this.selected.section}
        text: this.sections[i],
      });
    },
    numToDaf(num) {
      num += 3;
      return num % 2 == 0 ? this.hebrewNumber(num / 2) + ':' : this.hebrewNumber((num + 1) / 2) + '.';
    },
    hebrewNumber(num) {
      const sNumber = String(num);
      const hebrewThousands = ['', 'א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ז׳', 'ח׳', 'ט׳'];
      const hebrewHundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
      const hebrewTens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
      const hebrewUnits = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];

      const numberLength = sNumber.length;
      let sTens = 0,
        sHundreds = 0,
        sThousands = 0;
      let sUnits = sNumber[numberLength - 1];
      if (sNumber > 9) sTens = sNumber[numberLength - 2];
      if (sNumber > 99) sHundreds = sNumber[numberLength - 3];
      if (sNumber > 999) sThousands = sNumber[numberLength - 4];
      let myHebrewNumber =
        hebrewThousands[sThousands] + hebrewHundreds[sHundreds] + hebrewTens[sTens] + hebrewUnits[sUnits] + '*';
      myHebrewNumber = myHebrewNumber.replace('יו*', 'טז*');
      myHebrewNumber = myHebrewNumber.replace('יה*', 'טו*');
      myHebrewNumber = myHebrewNumber.slice(0, myHebrewNumber.length - 1);
      return myHebrewNumber;
    },
  },
  watch: {
    'selected.daf': {
      handler: async function (newDaf) {
        const url = `https://www.sefaria.org/api/texts/
          ${this.tractates[this.selected.tractate]}.
          ${this.selectedDaf}`;
        const dafText = await (await fetch(url)).json();
        this.sections = dafText.he;
      },
    },
  },
  async mounted() {
    try {
      const bavli = await (await fetch('https://www.sefaria.org/api/shape/Talmud/Bavli')).json();
      this.tractates = bavli.map((item) => item.heTitle);
      this.dafim = bavli.map((daf) => daf.chapters).map((dafim) => dafim.filter((d, i) => i >= 2));
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>
