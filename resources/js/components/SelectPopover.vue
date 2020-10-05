<template>
  <div ref="selectionPopover" class="absolute" :style="style">
    <div :class="[bgColor]" class="relative z-50">
      <slot />
    </div>
    <span
      :class="[bgColor]"
      class="absolute bottom-0 left-0 right-0 z-0 w-2 h-2 mx-auto transform rotate-45 translate-y-1/2"
    ></span>
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
    bgColor: {
      type: String,
      default: 'bg-gray-800',
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
        opacity: ${this.show ? 1 : 0};
        pointer-events: ${this.show ? 'all' : 'none'};
        top: ${this.popoverBox.top}px;
        left: ${this.popoverBox.left}px;
        box-shadow: 0px 0px 0px 2px #ffffff8c;
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
      const selectionBox = selection.getRangeAt(0).getBoundingClientRect();
      const popoverBox = this.$refs.selectionPopover.getBoundingClientRect();
      const targetBox = document.querySelector('[data-selectable]').getBoundingClientRect();
      this.popoverBox = {
        top: selectionBox.top - targetBox.top - this.topOffset,
        left: selectionBox.width / 2 - popoverBox.width / 2 + (selectionBox.left - targetBox.left),
      };
    },
  },
  beforeDestroy() {
    const target = document.querySelector('[data-selectable]');
    target && target.removeEventListener('mouseup', this.handleMouseUp);
  },
  mounted() {
    const target = document.querySelector('[data-selectable]');
    target && target.addEventListener('mouseup', this.handleMouseUp);
  },
};
</script>
