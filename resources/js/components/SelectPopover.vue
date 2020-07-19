<template>
  <div v-if="show" ref="selectionPopover" class="absolute" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SelectionPopover',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    topOffset: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      popoverBox: {
        top: 0,
        left: 0,
      },
    };
  },
  computed: {
    style() {
      return `
        top: ${this.popoverBox.top}px;
        left: ${this.popoverBox.left}px;
      `;
    },
  },
  methods: {
    selection() {
      return window.getSelection().toString();
    },
    selectionExists() {
      const selection = window.getSelection();
      return (
        selection &&
        selection.rangeCount > 0 &&
        selection.getRangeAt(0) &&
        !selection.getRangeAt(0).collapsed &&
        selection.getRangeAt(0).getBoundingClientRect().width > 0 &&
        selection.getRangeAt(0).getBoundingClientRect().height > 0
      );
    },
    clearSelection() {
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      } else if (document.selection) {
        document.selection.empty();
      }
    },
    handleMouseUp() {
      if (this.selectionExists()) {
        this.$emit('select');
        return this.computePopoverBox();
      }
      this.$emit('deselect');
    },
    computePopoverBox() {
      const selection = window.getSelection();
      if (!this.selectionExists()) {
        return;
      }
      console.log({ selection });
      const selectionBox = selection.getRangeAt(0).getBoundingClientRect();
      const popoverBox = this.$refs.selectionPopover.getBoundingClientRect();
      const targetBox = document.querySelector('[data-selectable]').getBoundingClientRect();
      console.log(selectionBox, popoverBox, targetBox);
      this.popoverBox = {
        top: selectionBox.top - targetBox.top - this.topOffset,
        left: selectionBox.width / 2 - popoverBox.width / 2 + (selectionBox.left - targetBox.left),
      };
    },
  },
  beforeDestroy() {
    const target = document.querySelector('[data-selectable]');
    target.removeEventListener('mouseup', this.handleMouseUp);
  },
  mounted() {
    const target = document.querySelector('[data-selectable]');
    target.addEventListener('mouseup', this.handleMouseUp);
  },
};
</script>

<style>
</style>
