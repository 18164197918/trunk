<template>
    <div class="demo-d1">
        <div class="text-gray-l20 mb5">
            不同的版本第一主色调会不一样，通过 type="primary-***" 进行区分
        </div>
        <div class="mb20 d-flex justify-around text-center">
            <div>
                <el-button type="primary">primary</el-button>
                <p>primary</p>
            </div>
            <div>
                <el-button type="primary-com">企业版主色调按钮</el-button>
                <p>primary-com</p>
            </div>
            <div>
                <el-button type="primary-shop">商城版主色调按钮</el-button>
                <p>primary-shop</p>
            </div>
            <div>
                <el-button type="primary-hotel">酒店版主色调按钮</el-button>
                <p>primary-hotel</p>
            </div>
            <div>
                <el-button type="primary-store">门店版主色调按钮</el-button>
                <p>primary-store</p>
            </div>
            <div>
                <el-button type="primary-takeout">外送版主色调按钮</el-button>
                <p>primary-takeout</p>
            </div>
        </div>
        <div class="w500 d-flex align-center justify-between">
            <div class="block1 w70 h50"></div>
            <div class="block2 w70 h70"></div>
            <div class="block3 w70 h50"></div>
        </div>

        <p class="mt10 text-primary">主色调文字</p>

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    @import "../../styles/variables";

    .demo-d1 {
        .block1 {
            background-color: $primary;
        }
        .block2 {
            background-color: lighten($primary, 20%);
        }
        .block3 {
            background-color: darken($primary, 20%);
        }
    }
</style>
