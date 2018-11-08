<template>
  <div class="charts"><LineChart msg="Welcome to Your Vue.js App" /></div>
</template>

<script>
// @ is an alias to /src
import LineChart from "@/components/LineChart.vue";

export default {
  name: "charts",
  components: {
    LineChart
  }
};
</script>
