<template>
  <router-view></router-view>
</template>
<style lang="scss">
@import "../../../styles/init";

.payBox {
  position: relative;
  min-width: 460px;

  .seeTerminal {
    padding: 10px;
    background-color: $white;
    position: absolute;
    top: 220px;
    left: 140px;
    z-index: 1;
    height: auto;
  }
}
</style>
