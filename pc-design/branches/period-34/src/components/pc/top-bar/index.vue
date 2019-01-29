<template>
    <div class="top-bar" @mousedown.stop>
        <div v-if="isDevelopment && isShowSourceBox" class="source-box">
            <div @click="isShowSourceBox=false" class="mask"></div>
            <textarea v-model="editSource"></textarea>
        </div>
        <div class="left">
            <div class="logo" @click="logoTo"><img src="../../../assets/logo.png" alt=""></div>
            <!--<div class="t category">栏目跳转</div>-->
            <div @click="$message('模板功能开发中')" class="t site-template">站点模板</div>
            <div class="t tool">
                <span>工具</span>
                <ul>
                    <li><label><input v-model="dataTools.isShowRuler" type="checkbox">标尺</label></li>
                    <li><label><input v-model="dataTools.isShowOption" type="checkbox">选项</label></li>
                    <li><label><input v-model="dataTools.isShowModuleTip" type="checkbox">模块提示</label></li>
                    <li><label><input v-model="dataTools.isShowHoverOnEdit" type="checkbox">即时动画</label></li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div @click="preview" class="t preview"><span>预览</span></div>
            <div @click="save" class="t save"><span>保存</span></div>
            <!--<div @click="publish" class="t publish"><span>清空</span></div>-->
            <div @click="back" class="t back"><span>返回</span></div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import dataEdit from '../common/data-edit'
  import dataSite from '../common/data-site'
  import dataPage from '../common/data-page'
  import dataTools from '../common/data-tools'
  import dataCache from '../common/data-cache'

  export default {
    data() {
      return {
        dataEdit,
        dataTools,
        dataCache,
        dataSite,
        isDevelopment  : process.env.NODE_ENV === 'development',
        isShowSourceBox: false,
      }
    },
    computed: {
      editSource: {
        get() {
          let d = this.dataEdit.data[0]
          return d && JSON.stringify(d, function (key, val) {
            if (key === 'assist' || key === 'parents') {
              return undefined
            }
            return val
          }, 5)
        },
        set(val) {
          this.dataEdit.data[0] && $.extend(true, this.dataEdit.data[0], JSON.parse(val))
        },
      },
    },
    methods : {
      logoTo() {
        if (this.isDevelopment) {
          this.isShowSourceBox = true
        }
        else {

        }
      },
      preview() {
        this.dataCache.isPreview = !this.dataCache.isPreview
      },
      save() {
        this.dataCache.isLoadingData = true
        Promise.all([
          dataSite.saveServerData(this.$route.params.siteId),
          dataPage.saveServerData(this.$route.params.pageId),
        ]).then(() => this.dataCache.isLoadingData = false)
      },
      publish() {
        dataPage.init()
        dataSite.init()
      },
      back() {
        this.save()
        this.$router.push('/bam/template/chooseList/pc')
        /*this.dataSite.get().database = [
          {
            id   : 1,
            title: '一组测试数据',
            map  : {
              name     : {
                label: '姓名',
                type: {
                  min : 0,
                  max : 30,
                  name: 'text',
                },
              },
              nick     : {
                label: '昵称',
                type: {
                  min : 0,
                  max : 30,
                  name: 'text',
                },
              },
              photo    : {
                label: '照片',
                type: {
                  min : 0,
                  max : 30,
                  name: 'src',
                },
              },
              intro    : {
                label: '简介',
                type: {
                  min : 0,
                  max : 100,
                  name: 'textarea',
                },
              },
              wb       : {
                label: '链接',
                type: {
                  name: 'link',
                },
              },

            },
            data : [
              {
                nick     : '张三',
                name     : '三儿',
                intro    : '张三张三的个人简介',
                wb       : 'http://www.baidu.com',
                photo    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
              },
              {
                nick     : '李四',
                name     : '小四',
                intro    : '小四的个人简介',
                wb       : 'http://www.taobao.com',
                photo    : 'usr/g5O46p2bRB/5bc45046360d8.jpg',
              },
            ],
          },
        ]*/
      },
    },
  }
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .top-bar {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #333333;

        .source-box {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 100000;

            .mask {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, .6);
            }

            textarea {
                position: absolute;
                padding: 10px;
                left: .5%;
                top: 1%;
                width: 94%;
                height: 98%;
                background-color: rgba(255, 255, 255, 1);
                font-family: 'Consolas';
                color: #1d1d1f;
                font-size: 13px;
                border: 0;
            }
        }

        .left {
            display: flex;
            height: inherit;
            align-items: center;
            padding-left: 40px;

            .logo {
                margin-right: 30px;
            }
            .t {
                position: relative;
                height: 100%;
                padding: 18px 20px;
                cursor: pointer;

                &:after {
                    position: absolute;
                    right: 0;
                    top: 18px;
                    width: 1px;
                    height: 20px;
                    background-color: #ddd;
                    content: "";
                }
            }
            .tool {
                position: relative;

                &:hover {
                    ul {
                        display: block;
                    }
                }

                ul {
                    display: none;
                    position: absolute;
                    z-index: 10000;
                    top: 55px;
                    left: -20px;
                    padding: 20px 15px;
                    width: 260px;
                    border-radius: 5px;
                    background-color: $white;
                    box-shadow: 0 5px 30px rgba(0, 0, 0, .1);
                    cursor: default;

                    &:before {
                        position: absolute;
                        left: 50px;
                        top: -7px;
                        border-left: 7px transparent solid;
                        border-right: 7px transparent solid;
                        border-bottom: 7px $white solid;
                        content: "";
                    }

                    li {
                        margin-bottom: 10px;
                        &:nth-last-child(1) {
                            margin-bottom: 0;
                        }

                        label {
                            display: inline-flex;
                            align-items: center;
                            cursor: pointer;
                            input {
                                margin-right: 7px;
                            }
                        }
                    }
                }
            }
        }
        .right {
            height: inherit;
            flex-grow: 1;
            display: flex;

            justify-content: flex-end;

            .t {
                width: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &:hover {
                    background-color: #eaf4fe;
                    color: $primary;
                }
            }
            /*.save {
                background-color: #eaf4fe;
                color: $primary;
            }
            .publish {
                background-color: $primary;
                color: $white;
            }*/
        }
    }

</style>
