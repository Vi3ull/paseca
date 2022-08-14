export default () => ({
  isOpen: false,

  onOpenModal() {
    if (this.isOpen) {
      return this.close()
    }

    this.isOpen = true
  },

  onCloseModal() {
    if (! this.isOpen) return

    this.isOpen = false
  },

  btnOpen: {
    ['@click.prevent']() {
        this.onOpenModal()
    },
  },

  btnClose: {
    ['@click.prevent']() {
        this.onCloseModal()
    },
  },

  modal: {
      [':class']() {
        return this.isOpen ? 'modal--open' : ''
    },
  },
  modalWrapper: {
    ['@mousedown.outside']() {
      this.onCloseModal()
    },  
  },
});