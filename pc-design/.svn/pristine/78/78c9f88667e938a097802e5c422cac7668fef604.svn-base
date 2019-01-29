<style lang="scss">
.change-store-list {
  height: 500px;
  overflow-y: auto;

  li {
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 5px 5px 3px rgba(86, 161, 250, 0.35);
    }
  }

  .icon {
    color: $white;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background: #e1727f;
    right: 0;
    top: 10px;

    &.istotal {
      background: $color-blue;
    }
  }
}
</style>
<template>
  <el-dialog
    :visible.sync="p_dialogVisible"
    title="请选择您要切换的门店"
    width="1000px"
  >
    <ul class="change-store-list df flex-wrap">
      <li
        :key="index"
        class="bd-gray p15 ml15 mr10 mb20 por dfc flex-column h220 pt20 cup"
        v-for="(item, index) in listItems"
      >
        <bg-img-box
          :src.sync="item.logo"
          class="w100 h100 db"
        ></bg-img-box>
        <p class="text-center lh40">{{item.name}}</p>
        <el-button
          @click="goStore(item)"
          class="w180"
          type="primary"
        >进入{{item.default_store ? '总' : '分'}}店</el-button>
        <div
          :class="{'istotal':item.default_store}"
          class="icon poa w40 h25 text-center lh25 fz12"
        >{{item.default_store ? '总' : '分'}}店</div>
      </li>
    </ul>
  </el-dialog>
</template>

<script>
import API from './API'

function getList () {
  this.$httpGet(API.storePaginator).then(res => {
    this.listItems = res.collection
  })
}

export default {
  name: 'storeList',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array, Object],
      default: null
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      p_dialogVisible: this.dialogVisible,
      listItems: []
    }
  },
  watch: {
    dialogVisible (val) {
      this.p_dialogVisible = val
    },
    p_dialogVisible (val) {
      this.$emit('update:dialogVisible', val)
    }
  },
  created () {
    Reflect.apply(getList, this, [])
  },
  methods: {
    // 进入门店
    goStore (item) {
      window.localStorage.setItem('store-id', item.id)
      window.localStorage.setItem('default-store', item.default_store)
      this.$router.push('/shop')
      this.p_dialogVisible = false
    }
  }
}
</script>
