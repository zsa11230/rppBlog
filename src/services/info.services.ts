import { getRepository, Repository } from "typeorm";
import infoEntity from "../entity/info.entity";
import Page from "../vo/page.vo";

/**
 * 查询所有
 */
export async function findAll(): Promise<infoEntity[]> {
  // Get the info repository from TypeORM.
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  // Find the requested info.
  const infos = await infoRepo.find();
  return infos;
}

/**
 * 分页查询
 */
export async function findPage(current: number, size: number): Promise<Page> {
  // Get the info repository from TypeORM.
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  // Find the requested info.
  const infos = await infoRepo.createQueryBuilder("infoEntity").orderBy("id", "DESC")
    .skip(+current)
    .take(+size).getManyAndCount();

  const page = new Page(infos[0], current, size, infos[1]);
  console.log(infos)
  return page;
}

/**
 * 通过ID查询
 * @param infoId
 */
export async function findById(infoId: string): Promise<infoEntity> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  const info = (await infoRepo.findOne(infoId)) || new infoEntity();
  return info;
}

/**
 * 创建
 * @param infoBody
 */
export async function create(infoBody: infoEntity): Promise<infoEntity> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  let info: infoEntity = infoRepo.create(infoBody);
  info = await infoRepo.save(info);
  return info;
}
/**
 * 通过ID删除
 * @param infoId
 */
export async function del(infoId: string): Promise<void> {
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  await infoRepo.delete(infoId);
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
  const infoRepo: Repository<infoEntity> = getRepository(infoEntity);
  const info = await findById(infoId);
  const updatedinfo = await infoRepo.merge(info, infoBody);
  return updatedinfo;
}


//定时任务
// var schedule = require('node-schedule');
// function scheduleCronstyle() {
//   schedule.scheduleJob('1-10 * * * * *', function () {
//     console.log('scheduleCronstyle:' + new Date());
//   });
// }
// scheduleCronstyle();