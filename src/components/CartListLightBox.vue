<template lang="">
  <div>
    <div
      class="modal fade"
      id="light-box"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">商品: {{ lightBoxItem.title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >單價: NT{{ lightBoxItem.price }}</label
                >
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">數量:</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="lightBoxItem.amount"
                  min="1"
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >小計: {{ lightBoxItem.price * lightBoxItem.amount }}</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="resetAmount"
            >
              關閉
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              修改
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["lightBoxItem"],
  data() {
    return {
      productSpecId: 0,
      oriAmount: 0,
    };
  },
  beforeUpdate() {
    if (this.productSpecId !== this.lightBoxItem.productSpecId) {
      this.productSpecId = this.lightBoxItem.productSpecId;
      this.oriAmount = this.lightBoxItem.amount;
    }
  },
  methods: {
    resetAmount() {
      this.lightBoxItem.amount = this.oriAmount;
      this.productSpecId = 0;
    },
  },
};
</script>
<style lang="css"></style>
