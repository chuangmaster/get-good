<template>
  <div id="app" class="mt-5">
    <div class="container">
      <h1>2023 平安皂預購單 by Get Good</h1>
      <div class="col-12">
        <div>
          <p>
            據說端午節當天午時（上午11點至下午1點）所取的水，是一年之中陽氣最盛、能量最強的天然水，具多重功效且久存不壞。<br />
            採午時能量水入皂清潔身體及保養，能趨吉避凶、去晦氣、招好運、正能量，讓你平安、好運旺旺一整年😘🌟🌟🌟<br /><br /><br />
            ✿ 配方油品：<br />
            橄欖油、棕櫚核仁油、米糠油、甜杏仁油、乳油木果脂、棕櫚油、椰子油
            <br /><br /><br />
            ✿其他成分：<br />
            平安粉(抹草、芙蓉、香茅、艾草)、NaOH、複方精油，及午時水。<br /><br /><br />
            ✿ 適用對象： <br />
            大家都適合啦:)<br />
            若為敏弱肌膚，請測試過後再使用，如使用後不適，請立即停用。
            <br /><br /><br />

            <span style="color: red">↓↓↓　非現貨！請注意以下出貨資訊　↓↓↓</span>
            ✿預訂&出貨時間： <br />
            預購時間：即日起 ~ 2023/06/30 <br />
            結帳時間：2023/07/24 依訂單時間陸續通知下單<br />
            出貨時間：2023/08/10陸續出貨 <br /><br /><br />
          </p>
        </div>
      </div>
      <div class="col-12">
        <form action="#">
          <div class="mb-3">
            <label for="name-ctrl-input" class="form-label">購買人</label>
            <input
              type="text"
              class="form-control"
              id="name-ctrl-input"
              placeholder=""
              v-model="shoppingcart.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email-ctrl-input" class="form-label">電子信箱</label>
            <input
              type="email"
              class="form-control"
              id="email-ctrl-input"
              placeholder="name@example.com"
              v-model="shoppingcart.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone-ctrl-input" class="form-label">連絡電話</label>
            <input
              type="text"
              class="form-control"
              id="phone-ctrl-input"
              placeholder=""
              minlength="6"
              maxlength="10"
              v-model="shoppingcart.phone"
              required
            />
          </div>
          <div class="mb-3">
            <label for="line-ctrl-input" class="form-label">LINE ID</label>
            <input
              type="text"
              class="form-control"
              id="line-ctrl-input"
              placeholder="選填"
              minlength="6"
              maxlength="10"
              v-model="shoppingcart.line"
            />
          </div>
          <div class="mb-3">
            <label for="instagram-ctrl-input" class="form-label"
              >Instagram帳號</label
            >
            <input
              type="text"
              class="form-control"
              id="instagram-ctrl-input"
              placeholder="選填"
              minlength="6"
              maxlength="10"
              v-model="shoppingcart.instagram"
            />
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card" style="width: 18rem">
                  <img
                    src="https://lh3.googleusercontent.com/9D9JxFT43hueoaIT4AX_6P2H6g3OmcbKofIck-2KsEQqxh-YpPqggtyB66VkdfRIRBJXqYrSlVWDYvpWavN6VLLyStQ40CmtybQljDzGo8nonOOghsJfgwjw0hpwADGijA=w2992"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title" v-html="p1_Title"></h5>
                    <p class="card-text">NT {{ p1_price }}</p>
                    <p class="card-text" v-html="p1_Description"></p>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="p1_selected"
                      @change="changeAmount(p1_selected)"
                    >
                      <option selected value="0">請選擇方案</option>
                      <option value="1">{{ products[0].optionTitle }}</option>
                      <option value="2">{{ products[1].optionTitle }}</option>
                      <option value="3">{{ products[2].optionTitle }}</option>
                      <option value="4">{{ products[3].optionTitle }}</option>
                    </select>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      @change="changeAmount(p1_selected)"
                      v-model="p1_amount"
                    >
                      <option selected value="0">請選擇數量</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card" style="width: 18rem">
                  <img
                    src="https://lh4.googleusercontent.com/nm8Gbi8t1jVCKaGvja-r7OFWRQjuatmRrSnLOVIXI96Ll5Sz_wJucIjUsNT7h-zzXyDMHVVkidbyMduzgj_3RyJQJZm3TfWASOUuDp5C0oABUWlqxCrEFAIg9H4m5wPpiQ=w739"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ products[4].name }}</h5>
                    <p class="card-text">NT {{ products[4].price }}</p>
                    <p class="card-text" v-html="products[4].description"></p>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      v-model="shoppingcart.products[4].amount"
                    >
                      <option selected value="0">請選擇數量</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-3">
                <div class="card" style="width: 18rem">
                  <img
                    src="https://lh3.googleusercontent.com/e7LhyecDSwoMq-2OUOodc8CnL4vcgVRAqX5bqA44A2zoYfjyBQpZWtt6H42IxNABymBXnBkquCN0TttmrNb2tGNjwYe62Rct1hz85tZ6ZRFyJ_Lqk8SwQQgXB-0tfG_zYQ=w740"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ products[5].name }}</h5>
                    <p class="card-text">NT {{ products[5].price }}</p>
                    <p class="card-text" v-html="products[5].description"></p>
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                      v-model="shoppingcart.products[5].amount"
                    >
                      <option selected value="0">請選擇數量</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h3 class="mb-3">小計 : {{ total }}</h3>
            <button
              type="submit"
              class="btn btn-success align-end"
              @click="submit"
            >
              確認預購
            </button>
          </div>
        </form>
      </div>
      <div class="col-12">
        ✿保存時間：<br />
        熟成後約18個月 <br /><br />
        ✿出貨方式：
        <ol>
          <li>統一以7-11賣貨便出貨-運費$35 (貨到付款)</li>
          <li>歡迎面交(台北捷運站藍線、橘線大站為主)</li>
        </ol>

        ✿其他補充
        <ol>
          <li>植物粉入皂，會因時間變長而顏色變淡</li>
          <li>
            添加一定比例之精油，會因晾皂期的經過跟著水份蒸發，香味會自然變淡。
          </li>
          <li>
            晾皂時間45天以上，熟成退鹼過後的手工肥皂，酸鹼值介於弱鹼性時，對肌膚溫和無負擔；手工皂因為含有「甘油」，因此洗起來雙手感覺非常溫和不乾澀，相反地洗後也能滋潤肌膚。
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      p1_selected: "0",
      p1_amount: "0",
      shoppingcart: {
        name: "",
        phone: "",
        instagram: "",
        line: "",
        products: [
          {
            id: 1,
            name: "平安皂 單顆裝",
            price: 180,
            amount: 0,
          },
          {
            id: 2,
            name: "平安皂 2入禮盒",
            price: 350,
            amount: 0,
          },
          {
            id: 3,
            name: "平安皂 3入禮盒",
            price: 520,
            amount: 0,
          },
          {
            id: 4,
            name: "平安皂 4入禮盒",
            price: 660,
            amount: 0,
          },
          {
            id: 5,
            name: "平安皂(其他造型) 100±5g",
            price: 165,
            amount: 0,
          },
          {
            id: 6,
            name: "可愛小皂 3入組",
            price: 120,
            amount: 0,
          },
        ],
        demand: 1,
      },
      products: [
        {
          id: 1,
          category: "A",
          name: "平安皂 單顆裝 95±5g/顆",
          optionTitle: "平安皂 單顆裝",
          description: "午時水平安粽 1 顆 (原價$225)",
          price: 180,
        },
        {
          id: 2,
          category: "A",
          name: "平安皂 2入禮盒",
          optionTitle: "平安皂 2入禮盒",
          description: "午時水平安粽2顆 (原價$450)",
          price: 350,
        },
        {
          id: 3,
          category: "A",
          name: "平安皂 3入禮盒",
          optionTitle: "平安皂 3入禮盒",
          description: "免運 午時水平安粽3顆 (原價$675)",
          price: 520,
        },
        {
          id: 4,
          category: "A",
          name: "平安皂 4入禮盒",
          optionTitle: "平安皂 4入禮盒",
          description: "免運 *贈小可愛造型皂乙顆<br>午時水平安粽4顆 (原價$900)",
          price: 660,
        },
        {
          id: 5,
          category: "B",
          image:
            "https://lh4.googleusercontent.com/nm8Gbi8t1jVCKaGvja-r7OFWRQjuatmRrSnLOVIXI96Ll5Sz_wJucIjUsNT7h-zzXyDMHVVkidbyMduzgj_3RyJQJZm3TfWASOUuDp5C0oABUWlqxCrEFAIg9H4m5wPpiQ=w739",
          name: "平安皂(其他造型) 100±5g",
          description: "※結單時會提供款式選擇 :D",
          price: 165,
        },
        {
          id: 6,
          category: "C",
          image:
            "https://lh3.googleusercontent.com/e7LhyecDSwoMq-2OUOodc8CnL4vcgVRAqX5bqA44A2zoYfjyBQpZWtt6H42IxNABymBXnBkquCN0TttmrNb2tGNjwYe62Rct1hz85tZ6ZRFyJ_Lqk8SwQQgXB-0tfG_zYQ=w740https://lh3.googleusercontent.com/e7LhyecDSwoMq-2OUOodc8CnL4vcgVRAqX5bqA44A2zoYfjyBQpZWtt6H42IxNABymBXnBkquCN0TttmrNb2tGNjwYe62Rct1hz85tZ6ZRFyJ_Lqk8SwQQgXB-0tfG_zYQ=w740",
          name: "可愛小皂 3入組",
          description:
            "(隨機款式出貨)<br>*皆為植物粉、礦物粉或草本植物萃取入皂",
          price: 120,
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
    },
    changeAmount(id) {
      if (parseInt(id) === 0) {
        this.shoppingcart.products[0].amount = 0;
        this.shoppingcart.products[1].amount = 0;
        this.shoppingcart.products[2].amount = 0;
        this.shoppingcart.products[3].amount = 0;

        return;
      }
      this.shoppingcart.products[id - 1].amount = this.p1_amount;
    },
  },
  computed: {
    p1_Title() {
      let name = "平安皂 單顆裝 95±5g/顆";
      switch (this.p1_selected) {
        case "1":
          name = this.products[0].name;
          break;
        case "2":
          name = this.products[1].name;
          break;
        case "3":
          name = this.products[2].name;
          break;
        case "4":
          name = this.products[3].name;
          break;
        default:
          name = this.products[0].name;
          break;
      }
      return name;
    },
    p1_price() {
      let price = this.products[0].price;
      switch (this.p1_selected) {
        case "1":
          price = this.products[0].price;
          break;
        case "2":
          price = this.products[1].price;
          break;
        case "3":
          price = this.products[2].price;
          break;
        case "4":
          price = this.products[3].price;
          break;
        default:
          price = this.products[0].price;
          break;
      }
      return price;
    },
    p1_Description() {
      let description = "午時水平安粽子皂 95±5g<br>(*限量60顆)";
      switch (this.p1_selected) {
        case "1":
          description = this.products[0].description;
          break;
        case "2":
          description = this.products[1].description;
          break;
        case "3":
          description = this.products[2].description;
          break;
        case "4":
          description = this.products[2].description;
          break;
        default:
          description = this.products[0].description;
          break;
      }
      return description;
    },
    total() {
      let total = 0;
      this.shoppingcart.products.forEach((x) => {
        if (x.id == this.p1_selected) {
          total += x.amount * x.price;
        } else if (x != "0" && x != "1" && x != "2" && x != "3") {
          total += x.amount * x.price;
        }
      });
      return total;
    },
  },
};
</script>
