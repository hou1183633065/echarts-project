<template>
  <div class="BarChart"><ve-map :data="chartData" :settings="chartSettings" :extend="chartExtend"></ve-map></div>
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
        positionJsonLink: 'https://unpkg.com/v-charts-custom-maps@0.2.1/hk-geo.json',
        position: 'HK',
        beforeRegisterMap (json) {
          // edit data here such as:
          // json.features[0].properties.cp = [121.509062, 26.044332]
          console.log(json)
          return json
        }
      }
      this.chartExtend = {
        series: {
          nameMap: {
            'Central and Western':'中西区',
            'Eastern':'东区',
            'Islands':'离岛',
            'Kowloon City':'九龙城',
            'Kwai Tsing':'葵青',
            'Kwun Tong':'观塘',
            'North':'北区',
            'Sai Kung':'西贡',
            'Sha Tin':'沙田',
            'Sham Shui Po':'深水埗',
            'Southern':'南区',
            'Tai Po':'大埔',
            'Tsuen Wan':'荃湾',
            'Tuen Mun':'屯门',
            'Wan Chai':'湾仔',
            'Wong Tai Sin':'黄大仙',
            'Yau Tsim Mong':'油尖旺',
            'Yuen Long':'元朗'
          }
        }
      }
    return {
      chartData: {
          columns: ['位置', ' 人口'],
          rows: [
            { '位置': '北区', ' 人口': 123 }
          ]
        }
    };
  }
};
</script>

<style scoped lang="scss">
</style>
