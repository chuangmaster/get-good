<template lang="">
  <div class="col-lg-4 col-md-6 mb-3">
    <div class="card">
      <img :src="shoppingItem.image" class="card-img-top" alt="商品圖" />
      <div class="card-body">
        <h5 class="card-title">{{ selectSpecNameTag }}</h5>
        <p class="card-text">{{ selectCategoryPriceTag }}</p>
        <p class="card-text" v-html="shoppingItem.description"></p>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="selectedSpecId"
        >
          <option selected value="0">請選擇方案</option>
          <option v-for="item in shoppingItem.productSpec" :value="item.specId">
            {{ item.name }} - {{ item.description }}
          </option>
          <label>數量</label>
          <input type="number" class="form-control" v-model="quantity" />
        </select>
      </div>
      <div class="card-body text-center">
        <button class="btn btn-outline-success m-3" @click="addToCart">
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["shoppingItem"],
  data() {
    return {
      selectedSpecId: -1,
      quantity: 1,
    };
  },
  computed: {
    selectSpecNameTag() {
      let str = "";
      if (this.selectCategoryPrice > 0) {
        str = this.name;
      } else {
        str = "";
      }
      return str;
    },
    selectCategoryPriceTag() {
      let str = "";
      if (this.selectCategoryPrice > 0) {
        str = "NT " + this.selectCategoryPrice;
      } else {
        str = "";
      }
      return str;
    },
    selectCategoryPrice() {
      const spec = this.shoppingItem.productSpec.find(
        (x) => x.specId === this.selectedSpecId
      );
      return spec ? spec.price : 0;
    },
  },
  methods: {
    addToCart(productSpecId) {
      this.$store.commit("addToCart", {
        productId: shoppingItem.id,
        productSpecId: productSpecId,
        amount: quantity,
      });
    },
  },
};
</script>
<style lang=""></style>
