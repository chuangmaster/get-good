<template lang="">
  <div class="col-lg-3 col-md-6 mb-3">
    <div class="card" style="width: 18rem">
      <img :src="shoppingItem.image" class="card-img-top" alt="商品圖" />
      <div class="card-body">
        <h5 class="card-title">{{shoppingItem.title}}</h5>
        <p class="card-text">NT {{ selectCategoryPrice }}</p>
        <p class="card-text" v-html="shoppingItem.description"></p>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="selectedSpecId"
        >
          <option selected value="0">請選擇方案</option>
          <option v-for="item in shoppingItem.productSpec">
            {{ item.name }} - {{ item.description }}
          </option>
        </select>
        <label>數量</label>
        <input type="number" class="form-control" v-model="quantity" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["shoppingItem"],
  data() {
    return {
      selectedSpecId: 0,
      quantity: 1,
    };
  },
  computed: {
    selectCategoryPriceTag() {
      let str = '';
      // if (this.selectCategoryPrice > 0) {
      //   str = 'NT ' + this.selectCategoryPrice;
      // } else {
      //   str = '';
      // }
      console.log( this.selectCategoryPrice);
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
    addToCart() {
      this.$store.commit("addToCart", {});
    },
  },
};
</script>
<style lang=""></style>
