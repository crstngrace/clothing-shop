export const state = () => ({
  items: [],
  total: 0,
});

export const getters = {
  getCartItems: (state) => state.items,
  getCartTotal: (state) => state.total,
};

export const mutations = {
  ADD_CART_ITEMS(state, value) {
    let found = false;

    // Check if item with same id and size already exist
    // If found, increment total; Else just add to the items
    const items = state.items.map((item) => {
      console.log(item.size, value.size);
      if (item.id == value.id && item.size == value.size) {
        item.total++;
        found = true;
      }

      return item;
    });

    if (found) {
      state.items = items;
    } else {
      state.items.push({ ...value });
    }

    state.total++;
  },
};
