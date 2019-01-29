<template>
    <div class="right-box" id="right-box" @mousedown.stop="mousedown" @keydown.stop>
        <div class="head-toggle-btn-box"><em @click="dataTools.isRightBoxFold=!dataTools.isRightBoxFold" class="iconfont iconfont-arrowright"></em></div>
        <div class="inner">
            <component :is="first && first.info.name" :first="first"></component>
        </div>
    </div>
</template>

<script>
  import {dataEdit, dataTools, dataCache} from '../../pc&mobile/common'
  import editPcList from '../../pc&mobile/edit-pc-list'

  export default {
    data() {
      return {
        dataEdit,
        dataTools,
        dataCache,
      }
    },
    computed  : {
      first () {
        return this.dataEdit.data[0]
      },
    },
    methods: {
      mousedown () {
        this.dataCache.colorPickerStatus = false
      }
    },
    components: {
      ...editPcList
    },
  }
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .design-pc{
        .right-box{
            input[type="radio"] {
                margin-top: 0;
                position: relative;
                width: 16px;
                height: 16px;
                min-height: 16px;
                background: #fff;
                border: 1px solid #B2AEBC;
                border-radius: 100%;
                -webkit-appearance: none;
                display: inline-block;
                vertical-align: -3px;
                outline:none;
            }
            input[type="radio"]:checked::before {
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                min-height: 8px;
                left: 3px;
                top: 3px;
                background: #2589FF;
                border-radius: 100%;
            }
            input[type="radio"]:checked::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                min-height: 16px;
                top: -1px;
                left: -1px;
                border: 2px solid #2589FF;
                border-radius: 100%;
            }

            input[type="checkbox"] {
                margin: 0;
                position: relative;
                white-space: nowrap;
                outline: none;
                display: inline-block;
                vertical-align: middle;
                border: 1px solid #b2aebc;
                border-radius: 4px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                min-height: 16px;
                background-color: #fff;
                z-index: 1;
                cursor: pointer;
                -webkit-appearance: none;
                vertical-align: -3px;
                -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
                transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            }
            input[type="checkbox"]:checked::before {
                box-sizing: content-box;
                content: "";
                border: 2px solid #fff;
                border-left: 0;
                border-top: 0;
                width: 4px;
                height: 8px;
                top: 1px;
                left: 4px;
                position: absolute;
                -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6).05s;
                transition: transform .15s cubic-bezier(.71,-.46,.88,.6).05s;
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-transform: rotate(45deg)scaleY(1);
                -ms-transform: rotate(45deg)scaleY(1);
                transform: rotate(45deg)scaleY(1);
            }
            input[type="checkbox"]:checked {
                background-color: #2589FF;
                border-color: #2589FF;
            }
            input[type="checkbox"]:disabled {
                background-color: #D4D4D4;
                border-color: #D4D4D4;
                position: relative;
                margin-right: 5px;
            }
        }
    }


    .design-pc:not(.right-box-fold){
        .base-set-box{
            height:auto !important;
            overflow-y: inherit !important;
        }
    }

    .design-pc.right-box-fold {

        .right-box {
            overflow: inherit;

            .head-toggle-btn-box {
                em {
                    transform: rotate(180deg);
                }
            }

            .diff-state-tab{
                display: none;
            }

            > .inner {
                padding: 0;
            }

            .base-iconfont {
                display: block;
            }
            .base-set-box {
                display: none;
            }
            .base-block{
                margin-bottom: 0;
                padding: 0;
                border-bottom: 0;
            }
        }
    }

    .right-box {
        overflow-x: hidden;
        overflow-y: scroll;

        > .inner {

        }

        .base-block {
            &.show-set-box {
                .base-iconfont{
                    background-color: lighten($primary, 5%);
                    color: $white;
                }
                .base-set-box {
                    display: block;
                    position: absolute;
                    top: 0;
                    border: 1px #eee solid;
                    border-right: 0;
                    border-radius: 2px;
                    box-shadow: -2px 0 5px rgba(0, 0, 0, .1);
                    padding: 10px;
                    right: $design-pc-right-fold-width;
                    width: 260px;

                    .tit {
                        //margin: 0;
                    }
                }
            }
        }

        .base-iconfont {
            position: relative;
            text-align: center;
            line-height: 40px;
            border-bottom: 1px #eee solid;
            color: #555;
            display: none;

            .dot{
                position: absolute;
                /*width: 6px;
                height: 6px;
                border-radius:50%;
                background-color:lighten($primary, 5%);*/

                width:0;
                height:0;
                border-width:0 6px 6px 0;
                border-style:solid;
                border-color:transparent lighten($primary, 5%) transparent transparent;/*透明 透明  灰*/
                top: 0;
                right: 0;
            }
        }


        .head-toggle-btn-box {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            padding: 0 5px;
            height: 16px;
            background-image: linear-gradient(#ddd, #d4d4d4);
            em {
                font-size: 12px;
                color: #777;
                cursor: pointer;

                &:hover {
                    color: #333;
                }
            }
        }



        .diff-state-tab {
            margin-bottom: 20px;
            display: flex;
            font-size: 13px;
            line-height: 2;

            span {
                flex: auto;
                text-align: center;
                cursor: pointer;
                border-bottom: 1px #eee solid;

                &.active {
                    color: $primary;
                    font-weight: 800;
                    border-bottom-color: $primary;
                }
            }
        }



        .remove-one {
            color: #ccc;
            font-size: 13px;
            cursor: pointer;

            &:hover {
                color: #444;
            }
        }

        .add-one {
            display: inline-block;
            margin-top: 2px;
            padding: 2px 12px;
            border-radius: 2px;
            border: 1px #ddd solid;
            cursor: pointer;

            &:hover {
                background-color: $primary;
                border-color: $primary;
                color: $white;
            }
        }




        $iconBeforeSize: 5px;
        $iconBeforeBg: #ccc;
        $iconSize: 18px;
        $iconBeforeSize: 5px;
        $iconBeforeBg: #ccc;

        .icon-common-list{
            dt{
                width: 32px !important;
            }
            .icon{
                position: relative;
                width: $iconSize;
                height: $iconSize;
                &:before{
                    position: absolute;
                    background: $iconBeforeBg;
                    content: '';
                }
            }
            &:only-child {
                .icon {
                    &:before {
                        content: initial;
                    }
                }
            }
            &:nth-child(1) {//上 左上
                .icon {
                    &:before {
                        top: -1px;
                        left: -1px;
                    }
                }
            }
            &:nth-child(2) {//右 右上
                .icon {
                    &:before {
                        top: -1px;
                        right: -1px;
                    }
                }
            }
            &:nth-child(3) {//下 右下
                .icon {
                    &:before {
                        right: -1px;
                        bottom: -1px;
                    }
                }
            }
            &:nth-child(4) {//左 左下
                .icon {
                    &:before {
                        left: -1px;
                        bottom: -1px;
                    }
                }
            }
        }

        /*边框*/
        .icon-list-border {
            .icon {
                border: 1px dotted #aaaaaa;
            }
            &:only-child {
                .icon {
                    border: $iconBeforeSize - 2 solid $iconBeforeBg;
                }
            }
            &:nth-child(1), &:nth-child(3) {
                .icon {
                    &:before {
                        width: $iconSize;
                        height: $iconBeforeSize;
                    }
                }
            }
            &:nth-child(2), &:nth-child(4) {
                .icon {
                    &:before {
                        width: $iconBeforeSize;
                        height: $iconSize;
                    }
                }
            }
        }

        /*圆角*/
        .icon-list-border-radius {
            .icon {
                border: 1px dotted #aaaaaa;
                border-radius: 50%;
                overflow: hidden;
            }
            &:only-child {
                .icon {
                    border: $iconBeforeSize - 2 solid $iconBeforeBg;
                }
            }
            .icon {
                &:before {
                    width: $iconSize / 2 + 1;
                    height: $iconSize / 2 + 1;
                }
            }
        }
    }

    .left-box,
    .right-box{
        input[type=number], input[type=text], select, textarea {
            height: 27px;
            padding: 0 5px;
            background-color: $white;
            background-image: none;
            border: 1px solid #ddd;
            color: #555;
            border-radius: 0;

            &:focus {
                border-color: $primary;
                outline: 0;
            }
        }

        input[type="text"], textarea {
            width: 100%;
            font-size: 14px;
        }
        textarea{
            height:150px;
        }

        input[type="range"] {
            margin-top: 2px;
            height: 2px;
            background-color: #ddd;
            outline: none;
            -webkit-appearance: none;

            &[disabled]::-webkit-slider-thumb {
                background: #ccc;
            }

            &::-webkit-slider-thumb {
                width: 10px;
                height: 20px;
                cursor: default;
                -webkit-appearance: none;
                background: $primary;
            }
        }

        dl.el-block {
            display: flex;
            align-items: center;
            font-size: 13px;

            dt {
                flex: none;
                width: 50px;
                font-weight: 400;
            }
            dd {
                display: flex;
                align-items: center;
                flex: auto;

                input[type="range"], select {
                    width: 100%;
                }

                input[type="number"] {
                    margin-left: 5px;
                    width: 50px;
                }

                &.only-number{
                    input[type="number"] {
                        width: 100%;
                    }
                }

                .unit {
                    position: relative;
                    width: 14px;
                    height: 19px;
                    flex-shrink: 0;
                    color: #555;
                    margin-left: 5px;

                    &.can-switch{
                        cursor: pointer;

                        &:after{
                            position: absolute;
                            right: -5px;
                            top: 1px;
                            border:3px #777 solid;
                            border-left-color: transparent;
                            border-bottom-color: transparent;
                            content:"";
                        }
                    }
                }


            }
        }

        .label-btn-group{
            font-size: 12px;
            .label-btn {
                position: relative;
                padding: 2px 12px;
                cursor: pointer;
                margin-right: -1px;
                border: 1px #ddd solid;

                input {
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                }

                span {
                    font-weight: 800;
                    color: #888;
                    font-family: 'Georgia', 'Microsoft YaHei';
                }

                input:checked ~ span {
                    color: $primary;
                }
            }
        }

        .base-block {
            position: relative;
            padding: 0 12px 12px 12px;
            border-bottom: 3px #e5e5e5 double;
            margin-bottom: 25px;
        }

        .base-set-box {
            display: block;
            background-color: $white;
            user-select: none;
            @include scrollbar(0);

            > .tit {
                margin: 5px 0 10px 0;
                font-size: 15px;
                font-weight: 800;
            }
        }
    }

</style>
