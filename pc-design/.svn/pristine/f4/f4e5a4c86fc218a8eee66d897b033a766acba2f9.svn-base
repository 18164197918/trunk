<template>
  <div class="sortable-demo ff-cls">
    <el-button
      @click="dataList.push({name: 'id-' + Math.floor(Math.random() * 100)})"
      type="primary"
    >增加一项
    </el-button>

    <div class="d-flex mt20">
      <b class="w80">对象属性:</b>
      <div class="ml10">
        <el-table
          :data="tableData"
          border
          class="w800"
          height="250"
          style="width:758px"
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
            label="默认值"
            prop="default"
            width="380"
          ></el-table-column>
        </el-table>

      </div>
    </div>

    <div class="d-flex mt20">
      <b class="w80">用法:</b>
      <div class="ml10">
        <p>{{str}}</p>
      </div>
    </div>

    <div class="d-flex mt20">
      <b class="w80 shrink-0">对象结构:</b>
      <p class="ml10">{{dataList}}</p>
    </div>

    <div class="mt50">

      <sort-list :options="{data: dataList ,beforeStart:beforeStart,stop:stop}" class="d-flex w400" style="flex-wrap: wrap;">
        <li v-for="item in dataList" :key="item.name" class="w100 h100 bg-gray-l62 m10 d-flex justify-center align-center fz20">{{item.name}}</li>

      </sort-list>
    </div>
  </div>
</template>

<script>
  import sortList from '../common/sortList.vue'

  export default {
    data() {
      return {
        str     : `<sort-list :options="{data, axis}"><div v-for="item in data"></div></sort-list>`,
        dataList: [
          {name: 'A'},
          {name: 'B'},
          {name: 'C'},
          {name: 'D'},
          {name: 'E'},
          {name: 'F'},
          {name: 'G'},
        ],
        obj     : {
          startIndex: null,
          stopIndex : null,
        },

        tableData: [{
          des: '拖拽方式',
          name: 'axis',
          default: '[\'x\', \'y\']'
        }, {
          des: '拖拽句柄',
          name: 'handle',
          default: ''
        }, {
          des: '取消排序元素选择器',
          name: 'cancel',
          default:''
        }, {
          des: '占位符类名',
          name: 'placeholder',
          default: ''
        }, {
          des: '拖拽之前触发函数',
          name: 'beforeStart',
          default: 'function( e, obj ){console.log(obj)}' +' \n '+
          '函数说明：' +' \n '+
          'type : function' +' \n '+
          'e:事件源'  +' \n '+
          'obj:返回对象 { startIndex:number} startIndex : 点击项的下标'
        }, {
          des: '拖拽完成触发函数',
          name: 'stop',
          default:'function( e, obj ){console.log(obj)}' +' \n '+
          '函数说明：' +' \n '+
          'type : function\n' +' \n '+
          'e:事件源' +' \n '+
          'obj:返回对象 { startIndex:number} startIndex : 点击项的下标'
        }, ],
      }
    },
    components: {
      sortList,
    },
    methods   : {
      beforeStart(e, obj) {
        this.obj.startIndex = obj.startIndex
        console.log(obj)
      },
      stop(e, obj) {
        this.obj.startIndex = obj.startIndex
        this.obj.stopIndex  = obj.stopIndex
        console.log(obj)
      },
    },
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
