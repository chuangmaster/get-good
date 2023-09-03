<template lang="">
  <div class="col-lg-4 col-md-6 mb-3">
    <div class="card">
      <img :src="shoppingItem.image" class="card-img-top" alt="商品圖" />
      <div class="card-body">
        <h5 class="card-title">{{ selectSpecNameTag }}</h5>
        <p class="card-text">{{ selectCategoryPriceTag }}</p>
        <p class="card-text" v-html="shoppingItem.description"></p>
        <select
          class="form-select mb-3"
          aria-label="Default select example"
          v-model="selectedSpecId"
        >
          <option selected value="-1">請選擇方案</option>
          <option v-for="item in shoppingItem.productSpec" :value="item.specId">
            {{ item.name }} - {{ item.description }}
          </option>
        </select>
        <label>數量</label>
        <input type="number" class="form-control" v-model="quantity" min="1" />
      </div>
      <div class="card-body text-center">
        <div class="btn btn-outline-success m-3" @click="addToCart">
          加入購物車
        </div>
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
  mounted() {
    //顯示預設選項
    this.shoppingItem.productSpec.forEach((x) => {
      if (x.isDefalutSelected === true) {
        this.selectedSpecId = x.specId;
      }
    });
  },
  computed: {
    selectSpecNameTag() {
      let str = "";
      if (this.selectCategoryPrice > 0) {
        str = this.shoppingItem.name;
      } else {
        str = this.shoppingItem.name;
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
    selectCategoryDescripotionTag() {
      const spec = this.shoppingItem.productSpec.find(
        (x) => x.specId === this.selectedSpecId
      );
      return spec ? `${spec.name}-${spec.description}` : "";
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
      if (this.selectedSpecId === -1) return;
      const item = {
        productId: this.shoppingItem.id,
        productSpecId: this.selectedSpecId,
        amount: this.quantity,
        title: this.selectCategoryDescripotionTag,
        price: this.selectCategoryPrice,
      };
      this.$store.commit("addToCart", item);
    },
  },
};
</script>
<style lang=""></style>
