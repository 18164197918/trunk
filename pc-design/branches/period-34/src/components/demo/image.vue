<template>
  <div>
    <p class="fz16 mb20">
      <b>图片路径过滤</b>
    </p>

    <div class="d-flex text-center mb10">
      <div>
        <img
          :src="path | filterImg"
          alt
          class="mr10 w200 h100 img-cover"
        >
        <p>img-cover</p>
      </div>
      <div>
        <img
          :src="path | filterImg"
          alt
          class="w200 h100 img-contain"
        >
        <p>img-contain</p>
      </div>
    </div>
    <p class="mb40">
      <b class="text-primary">filterImg:</b>
      {{path | filterImg}}
    </p>

    <div class="d-flex text-center mt20 mb10">
      <div>
        <div
          :style="path | filterImgObj"
          class="bg-cover w200 h100 mr10"
        ></div>
        <p>bg-cover</p>
      </div>
      <div>
        <div
          :style="path | filterImgObj"
          class="bg-contain w200 h100"
        ></div>
        <p>bg-contain</p>
      </div>
    </div>
    <p class="mb40">
      <b class="text-primary">filterImgObj:</b>
      {{path | filterImgObj}}
    </p>
    <div class="app-block-lv2">
      <h6>旧版</h6>
      <div>
        <bg-img-box :path="[imgObj1, 'path']"></bg-img-box>
        <div class="d-flex mt20 mb20">
          <b class="w80 shrink-0">对象属性:</b>
          <p class="ml10">{{imgObj1}}</p>
        </div>
      </div>
    </div>
    <div class="app-block-lv2">
      <h6>新版</h6>
      <div class="d-flex mt20">
        <b class="w80">组件属性:</b>
        <div
          class="ml10"
          style="width:1000px;"
        >
          <el-table
            :data="imgObj2TableData"
            border
          >
            <el-table-column
              label="名称"
              prop="name"
              width="180"
            ></el-table-column>
            <el-table-column
              label="描述"
              prop="des"
              width="180"
            ></el-table-column>
            <el-table-column
              label="类型"
              prop="type"
              width="180"
            ></el-table-column>
            <el-table-column
              label="可选值"
              prop="permit"
              width="180"
            ></el-table-column>
            <el-table-column
              label="默认值"
              prop="default"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="d-flex mt20">
        <b class="w80">用法:</b>
        <div class="ml10">
          <p>{{imgObj2Str}}</p>
          <br>
          <p>{{imgObj2Str2}}</p>
        </div>
      </div>
      <div class="d-flex mt20 mb20">
        <b class="w80 shrink-0">对象属性:</b>
        <p class="ml10">{{imgObj2}}</p>
      </div>
      <div>
        <bg-img-box
          :src.sync="imgObj2.path"
          class="mr20"
        ></bg-img-box>
        <bg-img-box
          :src.sync="imgObj2.path"
          upload
        ></bg-img-box>
      </div>
    </div>
  </div>
</template>

<script>
import bgImgBox from '../common/bg-img-box.vue' 

export default {  
  data () {
    return {    
      path: 'usr/g5O46p2bRB/5bc45046360d8.jpg',
      imgObj1: {
        path: ''
      },
      imgObj2: {
        path: ''
      },
      imgObj2Str:`<bg-img-box :src.sync="imgObj2.path"></bg-img-box>`,  
      imgObj2Str2:`<bg-img-box :src.sync="imgObj2.path" upload></bg-img-box>`,  
      imgObj2TableData:[
        {
          name: 'src',
          des: '图片路径',
          type: 'String',
          permit:'—', 
          default: '—'
        },
        {
          name: 'upload',
          des: '是否开启上传模式',
          type: 'Boolean',
          permit:'true，false',
          default: 'false' 
        },
        {
          name: 'showMode',
          des: '显示模式',
          type: 'String',
          permit:'cover/contain', 
          default: 'cover'
        }
      ]
    }
  },
  components: {
    bgImgBox
  }
}
</script>
