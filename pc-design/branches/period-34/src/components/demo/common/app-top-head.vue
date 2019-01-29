<template>
  <div class="top-header">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .top-header{
    position:fixed;
    left: 180px;
    top:0;
    right:0;
    height:90px;
    box-shadow: 0 0 30px 10px #d5e0ea;
    z-index: 1;
    .go-back{
      position:fixed;
      right: 40px;
      top:65px;
      cursor:pointer;
      span{
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ffffff;
        box-shadow: 0 0 10px 3px #eef2f6;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        color: #595959;
      }
    }
  }
  .el-tooltip__popper{
    color: #575757;
    padding: 3px 10px !important;
    border: 1px solid #a7a7a7 !important;
  }
</style>
