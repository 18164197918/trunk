<template>
  <div
    :class="{ 'mode1': mode === 1, 'mode2':  mode === 2 }"
    class="pic-box"
  >
    <template v-if="mode === 1">
      <div
        :style="selfPath | filterImgObj"
        class="img-obj"
      ></div>
      <div
        @click="removeSelfImage()"
        class="bj-close"
        v-if="selfPath && showClose"
      ></div>
      <div
        @click="uploadSelfImage()"
        class="add-img-tip"
        v-if="!selfPath"
      >添加图片</div>
      <div
        @click="uploadSelfImage()"
        class="add-img-btn"
        v-if="selfPath"
      >重新选择</div>
    </template>
    <template v-else-if="mode === 2">
      <div
        :class="{ 'bg-cover': showMode === 'cover', 'bg-contain': showMode === 'contain','cup':upload }"
        :style="p_src | filterImgObj"
        @click="upload && uploadSrc()"
        class="mode2 h100p"
      ></div>
      <div
        @click="removeSrc()"
        class="bj-close"
        v-if="!isBtnStatus && showClose && upload"
      ></div>
      <div
        @click="upload && uploadSrc()"
        class="add-img-btn"
        v-if="upload && isBtnStatus"
      >添加图片</div>
      <div
        @click="upload && uploadSrc()"
        class="add-img-btn"
        v-if="upload && !isBtnStatus"
      >重新选择</div>
    </template>
  </div>
</template>

<script>
import { error } from '@/tools'
import defaultImg from './images/img_box_default.jpg.js'
import uploadImg from './images/img_box_upload.jpg.js'

export default {
  name: 'bg-img-module',
  data () {
    return {
      mode: 0, // 模式:1老版、2新版
      isBtnStatus: true
    }
  },
  props: {
    // ↓ 旧版所需属性
    path: {},
    showClose: {
      default: true
    },
    // ↓ 新版所需属性
    src: {
      type: String
    },
    upload: Boolean,
    showMode: {
      type: String,
      default: 'cover',
      validator (value) {
        return ['cover', 'contain'].includes(value)
      }
    }
  },
  created () {
    if (typeof this.path !== 'undefined') {
      this.mode = 1
    } else if (typeof this.src !== 'undefined') {
      this.mode = 2
    } else {
      error('图片组件缺少关键属性【path/src】')
    }
  },
  computed: {
    selfPath () {
      let [obj, prop] = this.path
      if (obj && prop) {
        return obj[prop]
      }
      return ''
    },
    p_src () {
      if (this.src) {
        return this.src
      } else if (this.upload) {
        return uploadImg
      } else {
        return defaultImg
      }
    }
  },
  watch: {
    p_src () {
      this.isBtnStatus = !this.src
    }
  },
  methods: {
    // ↓ 旧版所需方法
    removeSelfImage () {
      this.$delete(this.path[0], this.path[1])
      let parent = this.$parent
      parent.$emit.apply(parent, ['el.form.change'].concat(''))
    },
    uploadSelfImage () {
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: obj => {
          this.$set(this.path[0], this.path[1], obj.ref_url)
          let parent = this.$parent
          parent.$emit.apply(parent, ['el.form.change'].concat(obj.ref_url))
        }
      })
    },
    // ↓ 新版所需方法
    uploadSrc () {
      this.$filemanager.open({
        limit: 1,
        type: 'image',
        success: file => {
          this.$emit('update:src', file.ref_url)
        }
      })
    },
    removeSrc () {
      this.$emit('update:src', '')
    }
  }
}
</script>
