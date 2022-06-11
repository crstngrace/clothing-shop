export default {
  computed: {
    // Check if small screen
    isSmallScreen() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
        case 'md':
          return true;
        default:
          return false;
      }
    },
  },
  methods: {
    // Format price with default 2 decimal places
    formatPrice(price, places = 2) {
      let newValue = parseFloat(
        Math.round(price * 100) / 100
      ).toFixed(places);

      return `$${newValue}`;
    },
  },
};
