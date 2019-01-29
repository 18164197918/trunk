<template>
  <div class="app-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../../styles/variables";

.app-content {
  position: fixed;
  left: 150px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  background-color: $white;
  overflow-y: scroll;
  @include scrollbar(0);
}
</style>
