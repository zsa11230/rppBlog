import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * 系统发布文章内容实体类
 */
@Entity()
export default class InfoContentRelation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ comment: "关联ID" })
  relationId: string;

  @Column({ comment: "标题" })
  title: string;

  @Column({ comment: "内容", type: "text" })
  content: string;

  @Column({ nullable: true, comment: "创建时间" })
  createTime: string;

  @Column({ nullable: true, comment: "修改时间" })
  updateTime: string;
}
