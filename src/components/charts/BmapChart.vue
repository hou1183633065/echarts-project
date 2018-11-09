<template>
  <div class="BmapChart">
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :tooltip="chartTooltip">
    </ve-bmap>
  </div>
</template>

<script>
// 百度地图
import VeBmap from "v-charts/lib/bmap.common";
export default {
  name: "BmapChart",
  components: {
    VeBmap
  },
  data() {
    this.chartSettings = {
        key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      }
      this.chartTooltip = { show: true }

    return {
      chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // 经度，维度，value，...
            ]
          }
        ]
    };
  }
};
</script>

<style scoped lang="scss">
</style>
