<template>
  <div class="charts">
    <!-- <line-chart/>
    <bar-chart/>
    <histogram-chart/> -->
    <!-- <bmap-chart/><hr> -->
    <!-- <amap-chart/> -->
    <map-chart/>
  </div>
</template>

<script>
// @ is an alias to /src

import LineChart from "@/components/charts/LineChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import HistogramChart from "@/components/charts/HistogramChart.vue";
import BmapChart from "@/components/charts/BmapChart.vue";
import AmapChart from "@/components/charts/AmapChart.vue";
import MapChart from "@/components/charts/MapChart.vue";

export default {
  name: "charts",
  components: {
    LineChart,
    BarChart,
    HistogramChart,
    BmapChart,
    AmapChart,
    MapChart
  }
};
</script>
