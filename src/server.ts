import app from "./app/app";
import * as Koa from "koa";
import databaseConnection from "./database/database.connection";

// Process.env will always be comprised of strings, so we typecast the port to a
// number.
const PORT: number = Number(process.env.PORT) || 3001;

function startServe(): Promise<Koa<any, {}>> {
  return new Promise((resolve, reject) => {
    return databaseConnection
      .then(() => {
        if (process.env.NODE_ENV !== "test") {
          app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
          });
        }
        resolve(app);
      })
      .catch(err => {
        reject(err);
      });
  });
}

//定时任务
// var schedule = require('node-schedule');
// function scheduleCronstyle() {
//   schedule.scheduleJob('1-10 * * * * *', function () {
//     console.log('scheduleCronstyle:' + new Date());
//   });
// }
// scheduleCronstyle();

export const eApp = startServe();
