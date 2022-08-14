export default () => ({
  isOpen: false,
  lastScrollTopPosition: 0,

  onOpenMenu() {
    if (this.isOpen) {
      return this.onCloseMenu()
    }

    this.isOpen = true
    this.lastScrollTopPosition = window.scrollY;

    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  },

  onCloseMenu() {
    if (! this.isOpen) return

    this.isOpen = false

    document.body.style.height = "auto";
    document.body.style.overflowY = "visible";
    window.scrollTo(0, this.lastScrollTopPosition);
  },

  btnOpen: {
    ['@click.prevent']() {
        this.onOpenMenu()
    },
  },

  btnClose: {
    ['@click.prevent']() {
        this.onCloseMenu()
    },
  },

  menuWrapper: {
    [':class']() {
      return this.isOpen ? 'open' : '';
    },
    ['@resize.window.throttle']() {
      if (window.innerWidth > 1536) {
        this.isOpen = false;
      }
    },
    ['@mousedown.outside']() {
      this.onCloseMenu()
    },  
  },
});