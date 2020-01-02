<template>
  <div class="operation-wrapper" @click.stop>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VecOperationWrapper',
}
</script>

<style lang="scss" scoped>
.operation-wrapper > * {
  margin-right: 5px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
}
.operation-wrapper > button {
  margin-right: 5px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
