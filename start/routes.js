"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Database = use("Database");

Route.on('/').render('welcome');
//Route.get("/", "InfoController.page");
// Route.get("/", async () => {
//   return await Database.table("sys_user").select("*");
// });
//更改路由之后需要重启服务
//Route.get("/", "SiteController.index");
Route.get("/login", "UserController.login");
Route.get("/info/:id", "UserController.info");
Route.get("/create", "InfoController.create");
Route.get("/page", "InfoController.page");

//登录
Route.get("/user/login", "UserController.userLogin");//.middleware('auth:session');

