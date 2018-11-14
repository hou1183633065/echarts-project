<template>
  <div class="ScrollTitle">
    <div class="scroll-text">{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "ScrollTitle",
  props: {
    msg: String
  }
};
</script>
<style lang="scss" scoped>
.ScrollTitle {
  width: 100%;
  overflow: hidden;
  .scroll-text {
    box-sizing: border-box;
    padding-left: 20px;
    display: inline-block;
    white-space: nowrap;
    animation: 10s wordsLoop linear infinite normal;
  }
}
@keyframes wordsLoop {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
