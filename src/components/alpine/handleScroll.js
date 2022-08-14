export default () => ({
  isSticky: false,
  headerHeight: null,

  header: {
    ['x-ref']: 'header',
    [':class']() {
      return this.isSticky ? 'header--sticky' : ''
    },
    ['@scroll.window.throttle']() {
      this.onStickHeader()
    },
  },

  init() {
    this.$nextTick(() => {
      this.headerHeight = this.$refs.header.offsetHeight;
    });
  },

  onStickHeader() {
    if (window.pageYOffset > this.headerHeight * 3) {
      this.isSticky = true
    } else {
      this.isSticky = false
    }
  },
});