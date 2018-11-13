<template>
  <div class="BarChart">
    <span>当前选中了: {{ cityName || "-" }}</span>
    <ve-map
      :data="chartData"
      :settings="chartSettings"
      :events="chartEvents"
    ></ve-map>
  </div>
</template>

<script>
// 地图
import VeMap from "v-charts/lib/map.common";
export default {
  name: "MapChart",
  components: {
    VeMap
  },
  data() {
    this.chartSettings = {
      position: "china",
      // selectData: true,
      selectedMode: "single"
    };
    this.chartEvents = {
      click: v => {
        this.cityName = v.name;
      }
    };
    return {
      cityName: "",
      chartData: {
        columns: ["位置", "GDP"],
        rows: [
          { 位置: "吉林", GDP: 123 },
          { 位置: "北京", GDP: 1223 },
          { 位置: "上海", GDP: 2123 },
          { 位置: "浙江", GDP: 4123 }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss"></style>
