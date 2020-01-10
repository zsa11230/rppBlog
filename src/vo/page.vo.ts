/**
 * Page VO
 */
export default class Page {
  constructor(records: any[], current: number, size: number, total: number) {
    this.records = records
    this.current = current
    this.size = size
    this.total = total
  }

  records: any[]

  current: number

  size: number

  total: number
}
