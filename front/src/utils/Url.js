/**
 * 通用打开网页方法
 * @param {String} value URL 路径
 * @param {String} type 路径类型
 */
export function openPage (value, type = 'path') {
  if (type === 'path') {
    if (value.includes('http') || value.includes('https')) {
      window.location.href = value
    } else {
      this.$router.push({
        path: value,
      })
    }
  }
  if (type === 'name') {
    this.$router.push({
      name: value,
    })
  }
  if (type === 'url') {
    window.open(value, '_blank')
  }
}
