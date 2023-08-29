<template>
  <div id="app" class="mt-5">
    <div class="container">
      <div class="col-12">
        <img class="img-fluid" src="./../assets/2023/header01.png" />
        <img class="img-fluid" src="./../assets/2023/header02.png" />
        <img class="img-fluid" src="./../assets/2023/intro01.png" />
        <img class="img-fluid" src="./../assets/2023/intro02.png" />
        <img class="img-fluid" src="./../assets/2023/intro03.png" />
        <img class="img-fluid" src="./../assets/2023/intro04.png" />
        <img class="img-fluid" src="./../assets/2023/intro05.png" />
        <img class="img-fluid" src="./../assets/2023/intro06.png" />
      </div>
      <div class="col-12">
        <form action="#">
          <div class="mb-3">
            <label for="name-ctrl-input" class="form-label">購買人</label>
            <input type="text" class="form-control" id="name-ctrl-input" placeholder="" v-model="shoppingcart.name"
              required />
          </div>
          <div class="mb-3">
            <label for="email-ctrl-input" class="form-label">電子信箱</label>
            <input type="email" class="form-control" id="email-ctrl-input" placeholder="name@example.com"
              v-model="shoppingcart.email" required />
          </div>
          <div class="mb-3">
            <label for="phone-ctrl-input" class="form-label">連絡電話</label>
            <input type="text" class="form-control" id="phone-ctrl-input" placeholder="" minlength="6" maxlength="10"
              v-model="shoppingcart.phone" required />
          </div>
          <div class="mb-3">
            <label for="line-ctrl-input" class="form-label">LINE ID</label>
            <input type="text" class="form-control" id="line-ctrl-input" placeholder="選填" minlength="6" maxlength="10"
              v-model="shoppingcart.line" />
          </div>
          <div class="mb-3">
            <label for="instagram-ctrl-input" class="form-label">Instagram帳號</label>
            <input type="text" class="form-control" id="instagram-ctrl-input" placeholder="選填" minlength="6"
              maxlength="10" v-model="shoppingcart.instagram" />
          </div>
          <div class="mb-3">
            <div class="row">
              <shopping-item v-for="(item, index) in products" :key="index" :shoppingItem="item"></shopping-item>
            </div>
          </div>
              <shopping-cart></shopping-cart>
          <div class="m-3">
            <button type="submit" class="btn btn-success align-end" @click="submit">
              確認預購
            </button>
          </div>

          <cartListLightBox :lightBoxItem="lightBoxItem"></cartListLightBox>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import shoppingItem from '../components/ShoppingItem.vue'
import shoppingCart from '../components/ShoppingCart.vue'
import cartListLightBox from '../components/CartListLightBox.vue'
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: { shoppingItem, shoppingCart, cartListLightBox },
  data() {
    return {
      shoppingcart: {
        name: "",
        phone: "",
        instagram: "",
        line: "",
      },
      products: [
        {
          id: 0,
          name: "精選",
          description: "精選描述文字(product)",
          image: 'https://lh4.googleusercontent.com/nm8Gbi8t1jVCKaGvja-r7OFWRQjuatmRrSnLOVIXI96Ll5Sz_wJucIjUsNT7h-zzXyDMHVVkidbyMduzgj_3RyJQJZm3TfWASOUuDp5C0oABUWlqxCrEFAIg9H4m5wPpiQ=w739',
          productSpec: [
            {
              specId: 0,
              name: "精選",
              description: "5台斤",
              price: 700,
            },
            {
              specId: 1,
              name: "精選",
              description: "10台斤",
              price: 1200,
            },
          ],
        },
        {
          id: 1,
          name: "特選",
          description: "特選描述文字(product)",
          image: 'https://lh4.googleusercontent.com/nm8Gbi8t1jVCKaGvja-r7OFWRQjuatmRrSnLOVIXI96Ll5Sz_wJucIjUsNT7h-zzXyDMHVVkidbyMduzgj_3RyJQJZm3TfWASOUuDp5C0oABUWlqxCrEFAIg9H4m5wPpiQ=w739',
          productSpec: [
            {
              specId: 2,
              name: "特選",
              description: "5台斤",
              price: 420,
            },
            {
              specId: 3,
              name: "特選",
              description: "10台斤",
              price: 780,
            },
          ],
        },
        {
          id: 2,
          name: "優選",
          description: "優選描述文字(product)",
          image: 'https://lh4.googleusercontent.com/nm8Gbi8t1jVCKaGvja-r7OFWRQjuatmRrSnLOVIXI96Ll5Sz_wJucIjUsNT7h-zzXyDMHVVkidbyMduzgj_3RyJQJZm3TfWASOUuDp5C0oABUWlqxCrEFAIg9H4m5wPpiQ=w739',
          productSpec: [
            {
              specId: 4,
              name: "優選",
              description: "5台斤",
              price: 300,
            },
            {
              specId: 5,
              name: "優選",
              description: "10台斤",
              price: 550,
            },
          ],
        },
      ],
    };
  },
  methods: {
    submit() {
      if (this.shoppingcart.name === "") {
        alert("請填購買人");
        return;
      }
      if (this.shoppingcart.email === "") {
        alert("請填電話");
        return;
      }
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(this.shoppingcart.email)) {
        alert("信箱格式不合法");
        return;
      }
      if (this.shoppingcart.phone === "") {
        alert("請填電話");
        return;
      }
      let totalAmount = 0;
      this.shoppingcart.products.forEach((x) => {
        totalAmount += parseInt(x.amount);
      });
      if (totalAmount === 0) {
        alert("請選商品");
        return;
      } else {
        console.log(this.shoppingcart.products);
      }
      var config = {
        headers: {
          // "Content-Length": 0,
          "Content-Type": "text/plain",
        },
        responseType: "text",
      };

      let product = "{";
      var counter = 0;
      this.shoppingcart.products.forEach((x) => {
        counter++;
        if (parseInt(x.amount) > 0) {
          product += `"${x.name}": "${x.amount}"`;
          if (counter != this.shoppingcart.products.length) {
            product += ",";
          }
        }
      });
      product += "}";
      axios
        .post(
          "https://script.google.com/macros/s/AKfycbzR7FyavFRCfGFegRpE0iNGaicNHHlyn1pY7vJJnIXPeNjBgfqNzAA3TE0qNR75oc03VQ/exec",
          {
            name: `${this.shoppingcart.name}`,
            phone: `${this.shoppingcart.phone}`,
            email: `${this.shoppingcart.email}`,
            line: `${this.shoppingcart.line}`,
            instagram: `${this.shoppingcart.instagram}`,
            product: product.replace(",}", "}"),
          },
          config
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      alert("預購單已送出");
      window.location.reload();
    }
  },
  computed: {
    ...mapGetters(["lightBoxItem"])
  },
};
</script>
