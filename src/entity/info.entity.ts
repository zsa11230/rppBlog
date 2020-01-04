import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Info {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, comment: "标题" })
  title: string;

  @Column({ comment: "内容" })
  text: string;

  @Column({ nullable: true, comment: "创建时间" })
  createTime: string;

  @Column({ nullable: true, comment: "修改时间" })
  updateTime: string;

  @Column({ nullable: true, comment: "创建人" })
  creator: string;

}
