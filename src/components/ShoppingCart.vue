<template lang="">
  <div id="shopping-cart" class="card">
    <div class="card-header">
      購物車
    </div>
    <div class="card-body">
      <ul class="list-group">
        <ul class="list-group list-group-flush">
          <template v-if="shoppingCart.length > 0">
            <li
              v-for="(item, index) in shoppingCart"
              class="list-group-item d-flex justify-content-between align-items-center li-pointer"
              :key="index"
              @click="setLightBoxItem(item)"
              data-bs-toggle="modal"
              data-bs-target="#light-box"
              data-bs-whatever="@mdo"
            >
              {{ item.title }} ${{ item.price }}
              <span class="badge bg-primary rounded-pill">{{
                item.amount
              }}</span>
            </li>
          </template>
          <template v-if="shoppingCart.length <= 0">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              目前購物車還是空的，快去挑選喜歡的商品
            </li>
          </template>
        </ul>
      </ul>
    </div>
    <div class="card-footer">商品總計: $ {{ totalAmount }}</div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      oriItemAmount: 0,
    };
  },
  methods: {
    setLightBoxItem(product) {
      //塞lightbox內容
      this.setCartListLightBoxItem(product);
    },
    ...mapMutations(["setCartListLightBoxItem","setOriLightBoxItemAmount"]),
  },
  computed: {
    ...mapState(["shoppingCart"]),
    ...mapGetters(["totalAmount"])
  },
};
</script>
<style lang="css">
.li-pointer {
  cursor: pointer;
}
</style>
