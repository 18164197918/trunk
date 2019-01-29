<template>
    <div class="content-ruler">
        <div class="safe-line" :style="{width: dataSite.safeLineWidth}">
            <div class="horizontal-box ruler-box">
                <span v-for="item in scaleNum">{{(item - 1) * 100}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import dataSite from '../common/data-site'
export default {
  data () {
    return {
      dataSite: dataSite.get()
    }
  },
  computed: {
    scaleNum () {
      return Math.ceil(parseInt(this.dataSite.safeLineWidth) / 100)
    }
  }
}
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .design-mobile{
        .content-ruler{
            .safe-line{
                position: relative;
                margin:0 auto;
                height: 100%;
                border-left:1px $design-pc-ruler-line-color dashed;
                border-right:1px $design-pc-ruler-line-color dashed;
            }

            .ruler-box{
                position: absolute;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                font-size: 12px;
                background-color: #fafbfc;
                color: #888;

                span{
                    position: relative;
                    padding-left: 5px;
                    flex:none;
                    border-right: 1px #ddd solid;

                    &:nth-last-child(1){
                        border-right:0;
                    }

                    &:before, &:after{
                        position: absolute;
                        top: 0;
                        width: 20%;
                        height: 40%;
                        border-left:1px #ddd solid;
                        border-right:1px #ddd solid;
                        content:"";
                    }
                    &:before{
                        left: 20%;
                    }
                    &:after{
                        left: 60%;
                    }
                }

                &.horizontal-box{
                    width: 100%;
                    height: $design-pc-ruler-size;

                    span{
                        width: 100px;
                    }
                }
                &.vertical-box{
                    width: $design-pc-ruler-size;
                    height: 100%;

                    span{
                        height: 100px;
                    }
                }
            }
        }
    }

</style>
