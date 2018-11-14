<template>
  <div class="indexPage">
    <i-button type='success'>Button</i-button>
    <i-row>
      <i-col span="6">
        <scroll-title :msg="titleMsg"></scroll-title>
      </i-col>
      <i-col span="6">
        <scroll-title :msg="titleMsg"></scroll-title>
      </i-col>
      <i-col span="6">
        <scroll-title :msg="titleMsg"></scroll-title>
      </i-col>
      <i-col span="6">
        <scroll-title :msg="titleMsg"></scroll-title>
      </i-col>
    </i-row>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/charts">Charts</router-link>
    </div>
  </div>
</template>
<script>
import { Row, Col, Button } from "iview";
import ScrollTitle from "@/components/ScrollTitle.vue";
export default {
  name: "index",
  components: {
    iRow: Row,
    iCol: Col,
    iButton: Button,
    ScrollTitle
  },
  data() {
    return {
      titleMsg: "阿克苏接电话看见爱上的阿克苏接电话看见爱上的"
    };
  }
};
</script>
<style lang="scss"></style>
