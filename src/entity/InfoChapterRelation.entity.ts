import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * 系统发布文章章节实体类
 */
@Entity()
export default class InfoChapterRelation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, comment: "关联ID" })
  relationId: string;

  @Column({ unique: true, comment: "章节标题" })
  title: string;

  @Column({ comment: "地址" })
  address: string;

  @Column({ nullable: true, comment: "创建时间" })
  createTime: string;

  @Column({ nullable: true, comment: "修改时间" })
  updateTime: string;
}
