import { getRepository, Repository } from 'typeorm'
import infoEntity from '../entity/info.entity'
import InfoChapterRelation from '../entity/InfoChapterRelation.entity'
import Page from '../vo/page.vo'
import http from 'http'
import cheerio from 'cheerio'
import moment from 'moment'

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

  return page
}

/**
 * 通过ID查询
 * @param infoId
 */
export async function findById(infoId: string): Promise<InfoChapterRelation[]> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
  const relationRepo: Repository<InfoChapterRelation> = getRepository(InfoChapterRelation)
  const info = (await infoRepo.findOne(infoId)) || new infoEntity()
  const address = info.address;
  const url = 'http://novel.tingroom.com/' + address + '/'

  const searchInfo = new InfoChapterRelation();
  searchInfo.relationId = infoId;
  const count = await relationRepo.count(searchInfo)

  if (count > 1) {
    let result = await relationRepo.find(searchInfo)
    return result.sort(keysort('title', false))
  }

  let relations;

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

      let introduction = $('#infoLong').children().html()
      //分析文档结构  先获取每个li 再遍历里面的内容(此时每个li里面就存放着我们想要获取的数据)
      $('.clearfix li').each(async (index, value) => {
        //地址和类型为一行显示，需要用到字符串截取
        //地址
        let title = $(value)
          .find('a')
          .html()

        let address = $(value)
          .find('a')
          .attr('href')

        if (title != null) {
          let relation = new InfoChapterRelation()
          relation.relationId = infoId
          relation.title = title
          relation.address = address
          relation.introduction = introduction

          const time = Date.now();
          const day = moment(time).format('YYYY-MM-DD HH:mm');

          relation.createTime = day
          relation.updateTime = day
          relationRepo.save(relation)
        }
      })
      relations = relationRepo.find(searchInfo)
    })
  })

  return relations
}

/**
* 对数组中的对象，按对象的key进行sortType排序
* @param key 数组中的对象为object,按object中的key进行排序
* @param sortType true为降序；false为升序
*/
function keysort(key: any, sortType: any) {
  return function (a: any, b: any) {
    return sortType ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
  }
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

//定时任务
var schedule = require('node-schedule')
function scheduleCronstyle() {
  schedule.scheduleJob('0 2 15 ? * Thu', function () {
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
        $('.all001x li').each(async (index, value) => {
          //地址和类型为一行显示，需要用到字符串截取
          //地址
          let title = $(value)
            .find('a')
            .eq(1)
            .html()

          let address = $(value)
            .find('a')
            .eq(1)
            .attr('href')

          const infoRepo: Repository<infoEntity> = getRepository(infoEntity)
          const searchInfo = new infoEntity();
          searchInfo.title = title;
          const count = await infoRepo.count(searchInfo)
          if (count < 1) {
            let info = new infoEntity()
            info.title = title
            info.address = address

            const time = Date.now();
            const day = moment(time).format('YYYY-MM-DD HH:mm');

            info.createTime = day
            info.updateTime = day

            infoRepo.save(info)
          }

        })
      })
    })
  })
}
scheduleCronstyle()
