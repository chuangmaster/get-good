import { createStore } from "vuex";

export default createStore({
  state: {
    shoppingCart: [],
    lightBoxItem: {
      productId: 0,
      productSpecId: 0,
      amount: 0,
      title: "",
      price: 0,
    },
  },
  mutations: {
    addToCart(state, payload) {
      const product = state.shoppingCart.find(
        (x) =>
          x.productId == payload.productId &&
          x.productSpecId == payload.productSpecId
      );
      if (product !== undefined) {
        product.amount += payload.amount;
      } else {
        state.shoppingCart.push(payload);
      }
    },
    setCartListLightBoxItem(state, payload) {
      state.lightBoxItem = payload;
    },
  },
  getters: {
    totalAmount(state) {
      let amount = 0;
      state.shoppingCart.forEach((item) => {
        amount += item.amount * item.price;
      });
      return amount;
    },
    lightBoxItem(state) {
      return state.lightBoxItem;
    },
  },
  actions: {},
  modules: {},
});
