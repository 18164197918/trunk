<style scoped>
.map {
  /* width: 100%;
  height: 450px; */
}

.panel {
  position: absolute;
  background-color: white;
  max-height: 100%;
  overflow-y: auto;
  top: 0;
  width: 280px;
}
</style>

<template>
  <el-form :label-width="labelWidth+'px'">
    <el-form-item
      :class="{'is-required':required}"
      :label="label"
    >
      <el-cascader
        :options="gdMapData"
        :props="{value:'adcode',label:'name',children:'districts'}"
        @change="locationChange"
        class="mr10 w260"
        v-model="location"
      ></el-cascader>
      <el-input
        class="w300 mr10"
        placeholder="请输入详细街道地址"
        v-model="p_address"
      ></el-input>
      <el-button
        @click="searchByAddressName"
        class
        type="primary"
      >搜索地址</el-button>
    </el-form-item>
    <el-form-item>
      <div
        :id="mapId"
        :style="{ height: mapHeight+'px', width: mapWidth + 'px' }"
        class="map"
      ></div>
      <div
        :id="panelId"
        :style="{'left':mapWidth+5+'px'}"
        class="panel"
      ></div>
    </el-form-item>
    <el-form-item v-if="showInput">经度：
      <el-input
        :disabled="disabledInput"
        @input="inputHandle"
        class="w150 mr25"
        placeholder="请输入经度"
        v-model.number="p_lng"
      ></el-input>纬度：
      <el-input
        :disabled="disabledInput"
        @input="inputHandle"
        class="w150"
        placeholder="请输入纬度"
        v-model.number="p_lat"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script src="./a-map.js"></script>
