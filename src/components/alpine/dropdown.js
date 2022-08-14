export default () => ({
  open: false,

  // toggle() {
  //   this.open = ! this.open
  // },

  toggle() {
    if (this.open) {
      return this.close()
    }

    this.open = true
  },

  close() {
    if (! this.open) return

    this.open = false
  },

  trigger: {
    ['@click.prevent']() {
        this.toggle()
    },

    ['@keydown.escape']() {
      // this.close()
      console.log(this);
    },
  },

  dialogue: {
      [':class']() {
        return this.open ? 'dropdown--active' : ''
    },
  },
});