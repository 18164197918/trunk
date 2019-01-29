<template>
    <transition name="fileManager-fade">
        <div v-if="dataCache.isShowDatabase" class="pc-database">
            <div class="d-flex justify-between mb10 pb10 tit">
                <div class="d-flex align-center">
                    <h4 class="mr20">数据编辑</h4>
                    <el-select v-model="selectedBase" size="small" class="mr10">
                        <el-option v-for="item in database" :key="item.id" :label="item.title" :value="item"></el-option>
                    </el-select>

                    <el-button v-if="selectedBase" @click="modifyTitle" size="small">修改标题</el-button>
                </div>
                <div>
                    <el-button type="primary" size="small">新建一份数据项</el-button>
                    <el-button @click="dataCache.isShowDatabase=false;" type="" size="small">关闭</el-button>
                </div>
            </div>

            <div v-if="isShowModifyTitleBox" class="modify-title-box">
                <div class="mb20">
                    <el-input v-model="selectedBase.title" size="small" class="w50p"></el-input>
                </div>
                <div class="d-flex align-center">
                    <div v-for="(item, key) in selectedBase.map" class="d-flex align-center pr20 title-list">
                        <el-input v-model="item.name" size="small"></el-input>
                        <span class="iconfont iconfont-close ml5 text-danger fz12 c-pointer"></span>
                    </div>
                    <el-button type="primary" size="small">新增</el-button>
                </div>
            </div>

            <div v-if="selectedBase">
                <el-table :data="selectedBase.data">
                    <el-table-column type="expand">
                        <template slot-scope="scope">
                            <div class="d-flex flex-wrap inner-edit-box">
                                <div v-for="(item, key) in selectedBase.map" class="w50p mb15 pl20 pr20">
                                    <p class="mb3">{{item.name}}</p>
                                    <el-input v-if="item.type==='text'" v-model="scope.row[key]" type="text" size="small"></el-input>
                                    <el-input v-else-if="item.type==='link'" v-model="scope.row[key]" type="text" size="small"></el-input>
                                    <el-input v-else-if="item.type==='mtext'" v-model="scope.row[key]" type="textarea" size="small"></el-input>
                                    <bg-img-box v-else-if="item.type==='src'" :path="[scope.row, key]" size="small"></bg-img-box>
                                </div>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column v-for="(item, key) in selectedBase.map" :label="item.name">
                        <template slot-scope="scope">
                            <div v-if="item.type==='text'">{{scope.row[key]}}</div>
                            <div v-else-if="item.type==='mtext'">{{scope.row[key]}}</div>
                            <div v-else-if="item.type==='link'">......</div>
                            <div v-else-if="item.type==='src'" :style="scope.row[key] | filterImgObj" class="w60 h40 bg-contain"></div>
                        </template>
                    </el-table-column>

                    <el-table-column width="80" label="操作">
                        <template slot-scope="scope">
                            <div class="text-primary ">
                                <!--<i class="iconfont iconfont-edit1 c-pointer mr10" title="编辑"></i>-->
                                <i @click="deleteOne(scope)" class="iconfont iconfont-delete c-pointer" title="删除"></i>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button @click="addOne" type="primary" size="small" class="mt20">新增一条</el-button>
            </div>
        </div>
    </transition>
</template>

<script>
import $ from 'jquery'
import bgImgBox from '../../common/bg-img-box.vue'
import dataSite from '../common/data-site'
import dataCache from '../common/data-cache'

export default {
  name: 'database',
  data () {
    return {
      dataCache,
      // database: dataSite.get('database'),
      selectedBase: '',
      isShowModifyTitleBox: false
    }
  },
  methods: {
    deleteOne (scope) {
      this.selectedBase.data.splice(scope.$index, 1)
    },
    addOne () {
      this.selectedBase.data.push($.extend(true, [], this.selectedBase.data[0]))
    },
    modifyTitle () {
      this.isShowModifyTitleBox = !this.isShowModifyTitleBox
    }
  },
  components: {
    bgImgBox
  }
}
</script>

<style lang="scss">
    @import "../../../styles/variables";

    .pc-database{
        position: fixed;
        left: 5px;
        top: 5px;
        right: 5px;
        bottom: 5px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 40px rgba(0,0,0,.3);
        border-radius: 5px;
        z-index: 100000;
        overflow-y: scroll;
        @include scrollbar(0);

        .tit{
            box-shadow: 0 5px 20px -10px rgba(0,0,0,.35);
        }

        .modify-title-box{
            margin-bottom: 20px;
            padding: 20px;
            border:1px #ddd solid;
            border-radius: 4px;

            .title-list{
                &:hover{
                    .iconfont{
                        opacity: 1;
                    }
                }

                .iconfont{
                    opacity: 0;
                }
            }
        }

        .inner-edit-box{
            padding:10px 0;
            background-color: #f9f9f9;
            border-radius: 4px;
            border:1px lighten($primary, 10%) solid;
        }
    }
</style>
