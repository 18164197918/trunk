<template>
  <div>
    <p class="mb20">
      <b>名称：</b>二级区块
      <br>
      <b>类名：</b>app-block-lv2
      <br>
      <b>用法：</b>
    </p>
    <pre>
      &lt;any class="app-block-lv2"&gt;
        &lt;h6&gt;标题&lt;/h6&gt;
      &lt;/any&gt;
    </pre>
    <div class="app-block-lv2 h200">
      <h6>标题</h6>
    </div>
    <div class="app-block-lv2 h200">
      <h6>标题</h6>
    </div>
    <p class="mb20">
      <b>名称：</b>一级标题
      <br>
      <b>类名：</b>app-title
      <br>
      <b>用法：</b>
    </p>
    <pre>
      &lt;h6 class="app-title"&gt;标题&lt;/h6&gt;
      &lt;h6 class="app-title"&gt;标题&lt;span&gt;副标题内容&lt;/span&gt;&lt;/h6&gt;
    </pre>
    <h6 class="app-title">标题</h6>
    <h6 class="app-title">
      标题
      <span>副标题内容</span>
    </h6>
  </div>
</template>
<script>

export default {
  name: 'class',
  data () {
    return {
      a: { a: 1 }
    }
  }
}
</script>
