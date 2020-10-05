import app from '../app';

export default {
  // shows a modal confirmation dialog
  confirm: (options = {}) => {
    return new Promise((resolve, reject) => {
      app.$page.modal = {
        open: true,
        icon: options.icon || 'warning',
        color: options.color || 'red',
        title: options.title || 'Confirm',
        message: options.message || 'Are you sure you want to complete this action?',
        action: {
          label: options.action.label || 'Confirm',
          confirm: resolve,
          cancel: reject
        }
      }
    })
  }
}
