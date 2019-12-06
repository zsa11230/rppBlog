"use strict";

const Database = use("Database");

class InfoController {
  //分页查询
  async page({ request , view}) {
    const current = request.input("current");
    const size = request.input("size");
    const pages = await Database.from("sys_info").paginate(current, size);

    return view.render('page',{
      pages,
      data : pages.data
    })
  }

  //查看详情
  async info({ params }) {
    return await Database.from("sys_info").where("id", params.id);
  }

  //新增文章
  async create({ request }) {
    const title = request.input("title");
    const context = request.input("context");

    const insertInfo = await Database.table("sys_info").insert({
      title: title,
      context: context
    });
    return insertInfo;
  }

  //修改文章
  async update({ request }) {
    const id = request.input("id");
    const title = request.input("title");
    const context = request.input("context");

    const affectedRows = await Database.table("sys_info")
      .where("id", id)
      .update({ title: title, context: context });

    return affectedRows;
  }

  //删除文章
  async delete({ params }) {
    return await Database.table("sys_info")
      .where("id", params.id)
      .delete();
  }
}

module.exports = InfoController;
