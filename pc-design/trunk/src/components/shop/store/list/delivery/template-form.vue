<style lang="scss">
.template-form {
  table {
    width: 100%;
    background: #ffffff;
    border-radius: 5px;
    tr {
      td,
      th {
        padding: 10px 15px;
        border: 1px solid $gray-line;
      }
    }
  }
  .el-input__inner {
    padding: 0 5px;
  }
}
</style>

<template>
  <div class="template-form">
    <div class="app-block-lv2">
      <h6>运费模板-编辑运费模板</h6>
      <el-form
        :model="form"
        class="mt20"
        label-width="140px"
        ref="form"
      >
        <el-form-item
          :rules="[
        { required: true, message: '请输入模板名称', trigger: 'blur' },
              { min: 2, max:18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
      ]"
          label="模板名称："
          prop="name"
        >
          <el-input
            class="w300"
            placeholder="请输入模板名称，最多18个字"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="承担运费："
          required
        >
          <el-radio-group v-model="form.free_post">
            <el-radio :label="false">买家</el-radio>
            <el-radio :label="true">卖家</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="计价方式："
          required
        >
          <el-radio-group v-model="form.freight_compute_mode">
            <el-radio :label="'ITEM'">按件计算</el-radio>
            <el-radio :label="'WEIGHT'">按重量计算（单位/克）</el-radio>
            <el-radio :label="'BULK'">按体积计算（单位/立方米）</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="配送区域及运费："
          required
        >
          <table class="bd-gray fz12">
            <tr>
              <th>可配送区域</th>
              <th>首件（个）</th>
              <th>运费(元)</th>
              <th>续件（个）</th>
              <th>续费(元)</th>
            </tr>
            <tr
              :key="index"
              v-for="(item,index) in form.freight_template_rule_list"
            >
              <td>
                <div
                  class="dfc"
                  v-if="index===0"
                >默认配送</div>
                <div v-if="index!==0">
                  <div class="lh24">{{item.contain_area_rule.rule_area_name}}</div>
                  <div
                    class="text-gray-l40 lh24"
                    v-if="$$isEmptyObject(item.contain_area_rule.area_recommend_rule_value)"
                  >请选择可配送区域</div>
                  <div class="text-right">
                    <el-button
                      class="fz12"
                      type="text"
                    >编辑</el-button>
                    <el-button
                      @click="del(index)"
                      class="fz12"
                      type="text"
                    >删除</el-button>
                  </div>
                </div>
              </td>
              <td>
                <el-input-number
                  :controls="false"
                  :max="999999"
                  :min="0"
                  :precision="0"
                  size="mini"
                  v-model="item.start_standards"
                ></el-input-number>
              </td>
              <td>
                <el-input-number
                  :controls="false"
                  :max="999999"
                  :min="0"
                  :precision="2"
                  size="mini"
                  v-model="item.start_freight"
                ></el-input-number>
              </td>
              <td>
                <el-input-number
                  :controls="false"
                  :max="999999"
                  :min="0"
                  :precision="0"
                  size="mini"
                  v-model="item.continued"
                ></el-input-number>
              </td>
              <td>
                <el-input-number
                  :controls="false"
                  :max="999999"
                  :min="0"
                  :precision="2"
                  size="mini"
                  v-model="item.continued_freight"
                ></el-input-number>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <el-button @click="addRule">
                  <i class="el-icon-location-outline"></i>点击添加可配送区域和运费
                </el-button>
              </td>
            </tr>
          </table>
        </el-form-item>
        <el-form-item label="免邮">
          <div class="dfc">
            <el-checkbox v-model="form.full_money_free_post">满
              <el-input-number
                :controls="false"
                :max="999999"
                :min="0"
                :precision="2"
                class="mr5"
                size="small"
                v-model="form.free_post_money"
              ></el-input-number>元包邮
            </el-checkbox>
          </div>
          <div class="dfc">
            <el-checkbox v-model="form.full_num_free_post">满
              <el-input-number
                :controls="false"
                :max="999999"
                :min="0"
                :precision="2"
                class="mr5"
                size="small"
                v-model="form.free_post_num"
              ></el-input-number>件包邮
            </el-checkbox>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="submit"
            type="primary"
          >保存</el-button>
          <el-button @click="p_show = true">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from '../API'
import { Message } from 'element-ui'
export default {
  name: 'templateForm',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    storeId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title: '运费模板',
      p_show: this.show,
      form: {
        'name': '',
        'free_post': false,
        'freight_compute_mode': 'ITEM',
        'full_money_free_post': true,
        'free_post_money': 98.5,
        'full_num_free_post': true,
        'free_post_num': 3,
        'freight_template_rule_list': [{
          'start_standards': 5,
          'start_freight': 2.5,
          'continued': 1,
          'continued_freight': 1.5,
          'general': true,
          'contain_area_rule': {}
        }]
      }
    }
  },
  watch: {
    show (val) {
      this.p_show = val
    },
    p_show (val) {
      this.$emit('update:show', val)
    }
  },
  created () {
    this.$httpGet(API.singleTemplate, {
      resource: {
        id: this.$route.params.id
      }
    }).then((res) => {
      if (res.data) this.form = res.data
    })
  },
  methods: {
    submit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          for (let p in this.form.freight_template_rule_list) {
            if (p > 0 && this.isEmptyObject(this.form.freight_template_rule_list[p].contain_area_rule.area_recommend_rule_value)) {
              Message.error('请选择区域')
              return
            }
          }
          this.$httpPost(API.singleTemplate, {
            resource: {
              id: this.$route.params.id
            },
            data: this.form
          })
        }
      })
    },
    del (index) {
      this.form.freight_template_rule_list.splice(index, 1)
    },
    addRule () {
      this.form.freight_template_rule_list.push({
        'start_standards': 1,
        'start_freight': 0,
        'continued': 1,
        'continued_freight': 0,
        'general': false,
        'contain_area_rule': {
          'area_recommend_rule_value': {}
        }
      })
    }
  }
}
</script>
