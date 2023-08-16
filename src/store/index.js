import { createStore } from "vuex";

export default createStore({
  state: {
    shoppingCart: [],
  },
  mutations: {
    addToCart(state, payload) {
      const product = state.shoppingCart.find(
        (x) =>
          x.productId == payload.productId &&
          x.productSpecId == payload.productSpecId
      );
      if (product !== undefined) {
        console.log(product);
        product.amount += payload.amount;
      } else {
        state.shoppingCart.push(payload);
      }
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
