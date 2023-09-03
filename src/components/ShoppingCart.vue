<template lang="">
  <div id="shopping-cart" class="card">
    <div class="card-header">
      您的購物車
    </div>
    <div class="card-body">
      <template v-if="shoppingCart.length > 0">
        <table class="table text-center">
        <thead>
          <tr>
            <th scope="col" width="25%">商品名稱</th>
            <th scope="col" width="25%">數量</th>
            <th scope="col" width="15%">單價</th>
            <th scope="col" width="15%">小計</th>
            <th scope="col" width="10%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in shoppingCart">
            <td>{{ item.title }}</td>
            <td>
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text pointer" @click="item.amount--"
                  >-</span
                >
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  v-model="item.amount"
                  style="text-align: center;"
                  min="1"
                />
                <span class="input-group-text pointer" @click="item.amount++"
                  >+</span
                >
              </div>
            </td>
            <td>${{ item.price }}{{ item.specId }}{{ shoppingCart.Id }}</td>
            <td>${{ item.amount * item.price }}</td>
            <td @click="remove(item.productId, item.productSpecId)">
              <font-awesome-icon :icon="['far', 'trash-can']" />
            </td>
          </tr>
        </tbody>
      </table>
      </template>
      <template v-else>
        目前購物車還是空的，快去挑選喜歡的商品
      </template>
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
    remove(productId, productSpecId) {
      this.removeFromCart({
        productId: productId,
        productSpecId: productSpecId,
      });
    },
    ...mapMutations([
      "removeFromCart",
    ]),
  },
  computed: {
    ...mapState(["shoppingCart"]),
    ...mapGetters(["totalAmount"]),
  },
};
</script>
<style lang="css">
.li-pointer,
.pointer {
  cursor: pointer;
}
</style>
