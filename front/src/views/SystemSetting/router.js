// import Layout from '@/layouts/'
import { menuData } from './config'
import { transToRouter } from '@/utils/Menu'
const data = transToRouter(menuData, true)
export default data
