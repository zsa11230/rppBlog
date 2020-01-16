import { getRepository, Repository } from 'typeorm'
import infoEntity from '../entity/info.entity'
import Page from '../vo/page.vo'
import http from 'http'
import cheerio from 'cheerio'

/**
 * 查询所有
 */
export async function findAll(): Promise<infoEntity[]> {
  // Get the info repository from TypeORM.
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  // Find the requested info.
  const infos = await infoRepo.find()
  return infos
}

/**
 * 分页查询
 */
export async function findPage(current: number, size: number): Promise<Page> {
  // Get the info repository from TypeORM.
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  // Find the requested info.
  const infos = await infoRepo
    .createQueryBuilder('infoEntity')
    .orderBy('id', 'DESC')
    .skip(+current)
    .take(+size)
    .getManyAndCount()

  const page = new Page(infos[0], current, size, infos[1])
  console.log(infos)
  return page
}

/**
 * 通过ID查询
 * @param infoId
 */
export async function findById(infoId: string): Promise<infoEntity> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  const info = (await infoRepo.findOne(infoId)) || new infoEntity()
  return info
}

/**
 * 创建
 * @param infoBody
 */
export async function create(infoBody: infoEntity): Promise<infoEntity> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  let info: infoEntity = infoRepo.create(infoBody)
  info = await infoRepo.save(info)
  return info
}
/**
 * 通过ID删除
 * @param infoId
 */
export async function del(infoId: string): Promise<void> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  await infoRepo.delete(infoId)
}
/**
 * 部分更新
 * @param infoId
 * @param infoBody
 */
export async function updateSome(
  infoId: string,
  infoBody: infoEntity
): Promise<infoEntity> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  const info = await findById(infoId)
  const updatedinfo = await infoRepo.merge(info, infoBody)
  return updatedinfo
}

//定时任务
var schedule = require('node-schedule')
function scheduleCronstyle() {
  schedule.scheduleJob('0 08 11 ? * Thu', function () {
    //爬虫参考网址https://www.cnblogs.com/bgwhite/p/9265959.html
    let url = 'http://novel.tingroom.com/'

    http.get(url, function (res) {
      let chunks: any[] = [],
        size = 0
      res.on('data', function (chunk) {
        chunks.push(chunk)
        size += chunk.length
      })
      res.on('end', function () {
        let data = Buffer.concat(chunks, size)
        let html = data.toString()
        //cheerio也就是nodejs下的jQuery  将整个文档包装成一个集合，定义一个变量$接收
        var $ = cheerio.load(html)
        //定义一个空数组，用来接收数据
        var result: any[] = []
        //分析文档结构  先获取每个li 再遍历里面的内容(此时每个li里面就存放着我们想要获取的数据)
        $('.all001x li').each((index, value) => {
          //地址和类型为一行显示，需要用到字符串截取
          //地址
          let title = $(value)
            .find('a')
            .eq(1)
            .html()
          console.log(title)

          let address = $(value)
            .find('a')
            .eq(1)
            .attr('href')
          console.log(address)
        })
      })
    })
  })
}
scheduleCronstyle()
