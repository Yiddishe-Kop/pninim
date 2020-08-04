<template>
  <div class="relative">
    <transition-group v-if="posts.length" name="postList" appear class="block my-12 space-y-8" data-selectable>
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    </transition-group>
    <div v-else class="my-6 text-center">No posts yet 😬</div>
    <select-popover
      :top-offset="42"
      @select="showPopover = true"
      @deselect="showPopover = false"
      :show="showPopover"
      bg-color="bg-gray-800"
      ref="selectionPopover"
      class="flex items-center p-1 text-gray-100 bg-gray-800 rounded-md shadow-lg"
      style="transform: rotate(-6deg);"
    >
      <button @click="lookupInLexicon" class="p-1 bg-gray-700 rounded hover:bg-gray-600" title="Lookup Meaning">
        <icon name="question-circle" class="w-5" />
      </button>
      <button class="p-1 bg-gray-700 rounded hover:bg-gray-600">
        <icon name="scale" class="w-5" />
      </button>
    </select-popover>
    <portal to="left-sidebar" v-if="lexicon.translations.length">
      <div class="space-y-3">
        <div v-for="t in lexicon.translations" :key="t.strong_number">
          <h2 class="p-1 mb-1 -m-2 font-extrabold text-gray-100 bg-gray-800 border-b border-gray-500">
            {{ t.headword }}
          </h2>
          <ul class="space-y-1">
            <li
              v-for="item in t.content.senses"
              :key="Math.random()"
              v-html="item.definition"
              class="text-xs text-justify"
            ></li>
          </ul>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard';
import SelectPopover from '@/components/SelectPopover';

export default {
  name: 'PostsList',
  props: ['posts'],
  components: { PostCard, SelectPopover },
  data() {
    return {
      showPopover: false,
      lexicon: {
        selection: '',
        translations: [],
      },
    };
  },
  methods: {
    lookupInLexicon() {
      const selection = this.$refs.selectionPopover.selection();
      // this.lexicon.selection = selection;
      this.getTranslation(selection);
    },
    async getTranslation(text) {
      const URL = 'https://www.sefaria.org/api/words/';
      const response = await (await fetch(`${URL}${text}`)).json();
      console.log(response);
      this.lexicon.translations = response;
    },
  },
};
</script>

<style>
</style>
