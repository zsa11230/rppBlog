"use strict";

const Database = use("Database");

class UserController {
  login({ request }) {
    return request.input("username");
  }

  async info({ params }) {
    //return await Database.table("sys_user").select("*");
    return await Database.from("sys_user").where("id", params.id);
  }
}

module.exports = UserController;
