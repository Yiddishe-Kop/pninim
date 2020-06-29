const autoSizeHeight = el => {
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight}px`;
}
const handler = e => {
  autoSizeHeight(e.target)
}

export default {
  bind(el) {
    el.addEventListener('input', handler)
  },

  inserted(el) {
    autoSizeHeight(el)
  },

  unbind(el) {
    el.removeEventListener('input', handler)
  }
}
