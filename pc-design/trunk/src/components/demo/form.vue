<template>
    <div>
        <div>
            <div class="common-tit1">
                <h4>客户信息</h4>
                <div class="edit">
                    <span><i class="iconfont iconfont-edit1"></i>编辑</span>
                </div>
            </div>
        </div>

        <div class="d-flex align-center">
            <div class="w120 h120 bd-gray d-flex align-center justify-center mr40">
                <img class="img-cover w80 h80" :src="info_img" alt="">
            </div>
            <div>
                <dl class="d-flex mb20">
                    <dt class="mr20">客户名称:</dt>
                    <dd>极捷号研发部</dd>
                </dl>
                <dl class="d-flex">
                    <dt class="mr20">联系电话:</dt>
                    <dd>152365666236</dd>
                </dl>
            </div>
        </div>

        <div class="w500 mt60">
            <el-form :rules="userInfoRules" :model="userInfo" label-width="100px">
                <el-form-item prop="name" label="活动名称">
                    <el-input v-model="userInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <p>{{userInfo.phone}}</p>
                </el-form-item>
                <el-form-item prop="path" label="客户头像">
                    <bg-img-box class="mr20" :path="[userInfo, 'path']"></bg-img-box>
                    <span class="fz12 text-gray-l30">（建议尺寸：90*90像素 ）</span>
                </el-form-item>
                <el-form-item class="mt25">
                    <el-button type="primary" class="w120">保存修改</el-button>
                    <el-button type="primary" class="w120" size="mini">保存修改</el-button>
                    <el-button type="info" class="w120">返回</el-button>
                </el-form-item>
            </el-form>

            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    append-to-body
                    width="30%">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import bgImgBox from '../common/bg-img-box.vue'

export default {
  data () {
    return {
      dialogVisible: false,
      info_img: require('../bam/assets/head-img1.png'),
      userInfo: {
        name: 'name',
        phone: '13000000000',
        path: ''
      },
      userInfoRules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' },
          { max: 5, message: '最大值不能超过5个', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '图片不能为空' }
        ]
      }
    }
  },
  components: {
    bgImgBox
  }
}
</script>
