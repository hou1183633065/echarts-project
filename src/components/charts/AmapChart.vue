<template>
  <div class="AmapChart">
    <ve-amap
      :settings="chartSettings"
      :series="chartSeries"
      :tooltip="chartTooltip"
    >
    </ve-amap>
  </div>
</template>

<script>
// 高德地图
import VeAmap from "v-charts/lib/amap.common";
export default {
  name: "BmapChart",
  components: {
    VeAmap
  },
  data() {
    this.chartSettings = {
      key: "4b5f2cf2cba25200cc6b68c398468899",
      v: "1.4.3",
      amap: {
        resizeEnable: true,
        center: [120.14322240845, 30.236064370321],
        zoom: 10
      }
    };
    this.chartTooltip = { show: true };

    return {
      chartSeries: [
        {
          type: "scatter",
          coordinateSystem: "bmap",
          data: [
            [120, 30, 1] // 经度，维度，value，...
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
