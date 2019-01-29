<style lang="scss" scoped>
.geo-transfer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .main {
    .el-dialog {
      width: 676px;
    }

    .el-transfer-panel {
      width: 270px;
    }

    .el-transfer-panel__body {
      height: 430px;
    }

    .el-transfer-panel__list.is-filterable {
      height: 385px;
    }

    .item-box {
      position: relative;

      .unfold {
        position: absolute;
        right: 10px;
        top: 5px;
        padding: 3px 7px;
      }
    }
  }
}
</style>

<template>
  <transition>
    <div class="geo-transfer">
      <div
        @click="close"
        class="mask"
      ></div>
      <div class="main">
        <div
          aria-label="提示"
          aria-modal="true"
          class="el-dialog"
          role="dialog"
          style="margin-top: 15vh;"
        >
          <div class="el-dialog__header">
            <span class="el-dialog__title">区域选择</span>
            <button
              @click="close"
              aria-label="Close"
              class="el-dialog__headerbtn"
              type="button"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <div class="el-dialog__body">
            <div class="el-transfer">
              <div class="el-transfer-panel">
                <p class="el-transfer-panel__header">
                  <label
                    class="el-checkbox"
                    role="checkbox"
                  >
                    <span
                      aria-checked="mixed"
                      class="el-checkbox__input"
                    >
                      <span class="el-checkbox__inner"></span>
                      <input
                        aria-hidden="true"
                        class="el-checkbox__original"
                        type="checkbox"
                      >
                    </span>
                    <span class="el-checkbox__label">可选省、市</span>
                  </label>
                </p>
                <div class="el-transfer-panel__body">
                  <el-input
                    class="el-transfer-panel__filter"
                    clearable
                    placeholder="请输入城市名称"
                    prefix-icon="el-icon-search"
                    size="small"
                    v-model="leftInput"
                  ></el-input>
                  <div
                    class="el-checkbox-group el-transfer-panel__list is-filterable"
                  >
                    <div
                      :key="province.adcode"
                      class="item-box"
                      v-for="province in leftData"
                    >
                      <!-- <el-checkbox
                        :label="province.adcode"
                        @change="handleProvinceChange(province,'left')"
                        class="el-transfer-panel__item"
                        v-model="province.selected"
                      >{{province.name}}</el-checkbox>-->
                      <label
                        :class="{'is-checked':isSelected(province.adcode,'left'),'is-indeterminate':isIndeterminate(province.adcode,'left')}"
                        class="el-checkbox el-transfer-panel__item"
                        role="checkbox"
                      >
                        <span
                          :class="{'is-checked':isSelected(province.adcode,'left'),'is-indeterminate':isIndeterminate(province.adcode,'left')}"
                          aria-checked="mixed"
                          class="el-checkbox__input"
                        >
                          <span class="el-checkbox__inner"></span>
                          <input
                            @click="handleProvinceChange(province,'left')"
                            aria-hidden="true"
                            class="el-checkbox__original"
                            type="checkbox"
                          >
                        </span>
                        <span class="el-checkbox__label">{{province.name}}</span>
                      </label>

                      <el-button
                        @click="toggle(province.adcode,'left')"
                        class="unfold"
                        size="mini"
                        v-if="province.districts && province.districts.length > 0"
                      >{{isOpen(province.adcode,'left') ? '收起' : '展开'}}</el-button>
                      <template v-if="isOpen(province.adcode,'left')">
                        <div
                          :key="city.adcode"
                          class="item-box-sub pl25"
                          v-for="city in province.districts"
                        >
                          <!-- <el-checkbox
                            :label="city.adcode"
                            @change="handleCityChange(province,city)"
                            class="el-transfer-panel__item"
                            v-model="city.selected"
                          >{{city.name}}</el-checkbox>-->
                          <label
                            :class="{'is-checked':isSelected(city.adcode,'left')}"
                            class="el-checkbox el-transfer-panel__item"
                            role="checkbox"
                          >
                            <span
                              :class="{'is-checked':isSelected(city.adcode,'left')}"
                              aria-checked="mixed"
                              class="el-checkbox__input"
                            >
                              <span class="el-checkbox__inner"></span>
                              <input
                                @click="handleCityChange(province,city,'left')"
                                aria-hidden="true"
                                class="el-checkbox__original"
                                type="checkbox"
                              >
                            </span>
                            <span class="el-checkbox__label">{{city.name}}</span>
                          </label>
                        </div>
                      </template>
                    </div>
                  </div>

                  <p
                    class="el-transfer-panel__empty"
                    style="display: none;"
                  >无匹配数据</p>
                  <p
                    class="el-transfer-panel__empty"
                    style="display: none;"
                  >无数据</p>
                </div>
              </div>

              <div class="el-transfer__buttons">
                <button
                  class="el-button el-button--primary is-disabled el-transfer__button"
                  disabled="disabled"
                  type="button"
                >
                  <span>
                    <i class="el-icon-arrow-left"></i>
                  </span>
                </button>
                <button
                  class="el-button el-button--primary is-disabled el-transfer__button"
                  disabled="disabled"
                  type="button"
                >
                  <span>
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </button>
              </div>

              <div class="el-transfer-panel">
                <p class="el-transfer-panel__header">
                  <label
                    class="el-checkbox"
                    role="checkbox"
                  >
                    <span
                      aria-checked="mixed"
                      class="el-checkbox__input"
                    >
                      <span class="el-checkbox__inner"></span>
                      <input
                        aria-hidden="true"
                        class="el-checkbox__original"
                        type="checkbox"
                        value
                      >
                    </span>
                    <span class="el-checkbox__label">
                      已选省、市
                      <span>0/0</span>
                    </span>
                  </label>
                </p>
                <div class="el-transfer-panel__body">
                  <el-input
                    class="el-transfer-panel__filter"
                    clearable
                    placeholder="请输入城市名称"
                    prefix-icon="el-icon-search"
                    size="small"
                    v-model="rightInput"
                  ></el-input>
                  <div
                    aria-label="checkbox-group"
                    class="el-checkbox-group el-transfer-panel__list is-filterable"
                    role="group"
                    style="display: none;"
                  ></div>
                  <p
                    class="el-transfer-panel__empty"
                    style="display: none;"
                  >无匹配数据</p>
                  <p class="el-transfer-panel__empty">无数据</p>
                </div>
              </div>
            </div>
          </div>
          <div class="el-dialog__footer">
            <span class="dialog-footer">
              <el-button @click="close">取 消</el-button>
              <el-button type="primary">确定</el-button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./main.js"></script>
