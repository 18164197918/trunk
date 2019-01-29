<style lang="scss">
.add-img {
  border: 1px dashed #dcdfe6;
  background: $white;
}
</style>

<template>
  <!-- 新建 -->
  <div class="app-block-lv2">
    <h6 class="app-title">
      单品库列表 - {{title}}单品
      <span
        @click="$router.back(-1)"
        class="text-primary cup"
      >返回</span>
    </h6>
    <el-form
      :model="form"
      :rules="formRules"
      label-width="100px"
      ref="ruleTestAdmin"
      size="small"
    >
      <el-form-item
        label="单品条码"
        prop="code"
      >
        <el-input
          class="w220 mr20"
          maxlength="20"
          placeholder="如无条码系统将自动生成"
          v-model="form.code"
        ></el-input>
        <span class="text-gray-l30 fz12">用于快速识别该单品</span>
      </el-form-item>
      <el-form-item
        label="单品名称"
        prop="title"
      >
        <el-input
          class="w270"
          v-model="form.title"
        ></el-input>
      </el-form-item>
      <el-form-item label="单品图片">
        <div class="dfc">
          <div
            :key="index"
            :style="item.file_path | filterImgObj"
            class="w115 h115 mr10 bg-cover por bd-gray"
            v-for="(item, index) in form.images"
          >
            <i
              @click="delImg(index)"
              class="bj-close"
            ></i>
            <div
              class="w115 h25 text-center lh25 fz12 poa"
              style="left:0; bottom:0; z-index:100; background:rgba(0,0,0,0.5); color:#fff"
              v-if="index===0"
            >主图</div>
          </div>
          <div
            @click="addImage"
            class="w115 h115 cup add-img dfcc"
            v-if="form.images.length!==5"
          >添加图片</div>
        </div>
        <p
          class="text-gray-l30 fz12"
        >尺寸建议750x750（正方形模式）或750×1000（长图模式）像素以上，大小2M以下，最多5张 (可拖拽图片调整显示顺序 )</p>
      </el-form-item>
      <el-form-item
        label="单品规格"
        prop="sku"
      >
        <el-input
          class="w220"
          type="text"
          v-model="form.sku"
        ></el-input>
      </el-form-item>
      <el-form-item label="单品分类">
        <el-cascader
          :options="classify"
          :props="{value:'id',label:'title',children:'childs'}"
          :show-all-levels="false"
          v-model="classifyInfo"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="单品单位">
        <el-select
          class="w220"
          placeholder="请选择单品单位"
          v-model="form.unit"
        >
          <el-option
            :key="item"
            :label="item"
            :value="item"
            v-for="item in unitLists"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单品成本">
        <el-input
          class="w150"
          v-model="form.cost_price"
        >
          <template slot="append">元</template>
        </el-input>
        <span class="fz12 text-gray-l30 ml20">设置单品的销售成本，作为统计利润的依据</span>
      </el-form-item>

      <el-form-item class="mt25">
        <el-button
          @click="save('add')"
          class="w120"
          type="primary"
        >保存并新增</el-button>
        <el-button
          @click="save('')"
          class="w80"
          type="primary"
        >保存</el-button>
        <el-button
          @click="$router.back(-1)"
          class="w80"
        >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import API from './API'
import sortList from '../../../common/sortList.vue'

export default {
  data () {
    return {
      title: '',
      image: null,
      classify: [],
      classifyInfo: [],
      form: {
        title: '',
        code: '',
        category_id: '',
        cost_price: '',
        unit: '',
        sku: '',
        images: []
      },
      unitLists: ['件', '盒', '箱', '包', '瓶', '只', '千克', '克', '两', '斤', '双', '套', '对', '块', '台', '本', '把', '码', '捆', '提', '杯', '听', '条', '副', '顶'],
      formRules: {}
    }
  },
  components: { sortList },
  created () {
    if (this.$route.params.id) {
      this.title = '编辑'
      this.$httpGet(API.singleGoods, {
        resource: {
          id: this.$route.params.id
        }
      }).then((res) => {
        this.form = res.data
        this.classifyInfo = this.form.category_path.concat([this.form.category_id])
      })
    } else {
      this.title = '新增'
    }
    this.$httpGet(API.singleGoodsClassify).then((res) => {
      this.classify = res.collection
      this.delCascaderEmptyChilds(this.classify, 'childs')
    })
  },
  methods: {
    addImage () {
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: file => {
          console.log(file)
          this.form.images.push({ file_path: file.ref_url })
        }
      })
    },

    delImg (index) {
      this.form.images.splice(index, 1)
    },

    save (type) {
      this.form.category_id = this.classifyInfo[this.classifyInfo.length - 1]

      if (this.$route.params.id) {
        this.$httpPut(API.singleGoods, {
          resource: { id: this.$route.params.id },
          data: this.form
        }).then(() => {
          if (type === 'add') {
            this.form = {
              title: '',
              code: '',
              category_id: '',
              cost_price: '',
              unit: '',
              sku: '',
              images: []
            }
          } else this.$router.back(-1)
        })
      } else {
        this.$httpPost(API.singleGoods, { data: this.form }).then(() => {
          if (type === 'add') {
            this.form = {
              title: '',
              code: '',
              category_id: '',
              cost_price: '',
              unit: '',
              sku: '',
              images: []
            }
          } else this.$router.back(-1)
        })
      }
    }
  }
}

</script>
