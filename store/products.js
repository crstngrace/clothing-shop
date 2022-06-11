export const state = () => ({
  products: [],
});

export const getters = {
  getProducts: (state) => state.products,
};

export const mutations = {
  SET_PRODUCTS(state, value) {
    state.products = value;
  },
};

export const actions = {
  // Get product list
  async fetchProducts({ commit }, payload) {
    try {
      const products = await this.$axios.$get('live/product');

      return products;
    } catch (e) {
      throw new Error(e);
    }
  },
};
