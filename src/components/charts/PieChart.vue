<template>
  <div class="PieChart"><ve-line :data="chartData"></ve-line></div>
</template>

<script>
// 饼图
import VeLine from "v-charts/lib/pie.common";
export default {
  name: "PieChart",
  components: {
    VeLine
  },
  data() {
    this.chartSettings = {
      // 设置横轴为连续的数值轴,设置横轴为连续的时间轴xAxisType=time
      xAxisType: "value",

      // 设置双y轴
      axisSite: { right: ["下单率"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["数值", "比率"],

      // 设置显示的指标维度
      metrics: ["访问用户", "下单用户"],
      dimension: ["日期"],

      // 堆叠面积图
      stack: { 用户: ["访问用户", "下单用户"] },
      area: true,

      // 设置别名
      labelMap: {
        PV: "访问用户",
        Order: "下单用户"
      },
      legendName: {
        访问用户: "访问用户 total: 10000"
      }
    };
    this.extend = {
      // 横坐标的倾斜
      "xAxis.0.axisLabel.rotate": 45,
      // 显示指标数值
      series: {
        label: {
          normal: {
            show: true
          }
        }
      }
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss"></style>
