export default () => ({
  isOpen: false,
  // lastScrollTopPosition: 0,

  // getBodyScrollTop() {
  //   return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  // },

  onOpenMenu() {
    if (this.isOpen) {
      return this.onCloseMenu()
    }

    this.isOpen = true
    // this.lastScrollTopPosition = window.scrollY;

    // document.body.style.height = "100vh";
    // document.body.style.overflowY = "hidden";
    // document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
  },

  onCloseMenu() {
    if (! this.isOpen) return

    this.isOpen = false

    // document.body.style.height = "auto";
    // document.body.style.overflowY = "visible";
    // document.body.style.marginRight = '0'; 
    // window.scrollTo(0, this.lastScrollTopPosition);
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