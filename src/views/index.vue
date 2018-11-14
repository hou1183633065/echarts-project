<template>
  <div class="indexPage">
    <scroll-title :msg="titleMsg"></scroll-title>
    <scroll-title msg="1111111111111111111111"></scroll-title>
    <scroll-title msg="2222222222222222222222"></scroll-title>
    <scroll-title msg="3333333333333333333333"></scroll-title>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/charts">Charts</router-link>
    </div>
  </div>
</template>
<script>
import ScrollTitle from "@/components/ScrollTitle.vue";
export default {
  name: "index",
  components: {
    ScrollTitle
  },
  data() {
    return {
      titleMsg: "阿克苏接电话看见爱上的"
    };
  }
};
</script>
<style lang="scss"></style>
