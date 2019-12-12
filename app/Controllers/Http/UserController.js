"use strict";

const Database = use("Database");


class UserController {
  login({ request , view}) {
    //return request.input("username");
    return view.render('login')
  }

  async userLogin({ auth, request }){
    const username = request.input("username");
    const password = request.input("password");
    const user = await Database.from("sys_user").where({
      'username': username,
      'password': password
    });

    console.log(user);

    await auth.attempt(1,password);

    return user;
  }

  async info({ params }) {
    //return await Database.table("sys_user").select("*");
    try {
      return await auth.getUser()
    } catch (error) {
      response.send('You are not logged in')
    }
    //return await Database.from("sys_user").where("id", params.id);
  }
}

module.exports = UserController;
