<template>
  <nav class="nav nav-tabs">
    <li class="nav-item">
      <router-link class="nav-link" :class="activeClass('home')" to="/">平安皂</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="activeClass('pomelo-github')" to="/get-good/pomelo2023"
        >柚子預購</router-link
      >
    </li>
  </nav>
  <router-view />
</template>

<style>
body {
  background-color: #f0ebf8;
}
/* .top-dec {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
  background-color: rgb(103, 58, 183);
} */
.info-block {
  background-color: #fff;
  border-radius: 8px;
}
</style>
<script>

export default {

  methods: {
    activeClass(...names){
      for (let name of names) {
    		if (name == this.$route.name)
        {
    			return 'active';
        }
      }
    }
  },
};
</script>
