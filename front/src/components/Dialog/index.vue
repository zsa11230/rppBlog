<template>
  <div class="vec-basic-scroll">
    <el-dialog class="vec-dialog" :width="width" :visible="dialogShow" append-to-body :close-on-click-modal="closeOnClickModal" v-bind="$attrs" v-on="$listeners">
      <div slot="title" class="dialog-title-box">
        <span class="dialog-title">{{title}}</span>
      </div>
      <el-scrollbar v-if="dialogShow" wrap-class="wrap-dialog" view-class="view-dialog">
        <slot></slot>
      </el-scrollbar>
      <div slot="footer" class="dialog-footer">
        <vec-operation-wrapper>
          <slot name="footer"></slot>
        </vec-operation-wrapper>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'VecDialog',
  inheritAttrs: false,
  props: {
    dialogShow: {
      default: false,
      type: Boolean,
    },
    title: {
      default: '标题',
      type: String,
      required: true,
    },
    width: {
      default: '30%',
      type: String,
    },
    closeOnClickModal: {
      default: false,
      type: Boolean,
    },
  },
  data () {
    return {
      fullscreen: false,
    }
  },
  watch: {
    dialogShow (n) {
      if (n) {
        this.$emit('slot-mounted')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.vec-dialog ::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}
.vec-dialog ::v-deep .el-dialog__body {
  padding: 10px 25px;
}
.vec-dialog ::v-deep .el-dialog__footer {
  padding: 10px 35px 20px;
}
.vec-dialog ::v-deep .wrap-dialog {
  max-height: 54vh;
  padding: 8px 0;
  overflow-x: hidden;
}
.vec-dialog ::v-deep .view-dialog {
  padding-bottom: 10px;
  padding-right: 10px;
}
.dialog-title {
  float: none;
  height: inherit;
  color: #000;
  overflow: hidden;
  margin: 0;
  padding-left: 0;
  font-weight: 700;
  line-height: 26px;
  font-size: 14px;
}
.dialog-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  height: 24px;
  padding-right: 20px;
}

.text-icon {
  color: #333;
}
</style>
