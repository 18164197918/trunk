<template>
  <div>
    <p class="mb20">
      <b>用法：</b>&lt;ueditor-wrap v-model="msg"&gt;&lt;/ueditor-wrap&gt;
    </p>
    <p class="text-gray-l30 mb20">数据延迟加载也可自动监听到</p>

    <ueditor-wrap v-model="msg"></ueditor-wrap>
    {{msg}}
  </div>
</template>

<script>

export default {
  name: 'd5',
  mounted () {
    setTimeout(() => {
      this.msg = '<h2>富文本编辑器</h2>'
    }, 1000)
  },
  data () {
    return {
      msg: null
    }
  }
}
</script>
