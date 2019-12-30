import { ConnectionOptions } from "typeorm";
import { join } from "path";
const parentDir = join(__dirname, "..");
const connectionOpts: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "typescript-koa",
  entities: [`${parentDir}/entity/**/*.entity.ts`],
  migrations: [`${parentDir}/migration/**/*.migration.ts`],
  subscribers: [`${parentDir}/subscriber/**/*.subscriber.ts`],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  },
  synchronize: true
};
module.exports = connectionOpts
