import "reflect-metadata";
import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { User } from "../entity/User.js";
dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User],
  options: {
    trustServerCertificate: true,
  },
  subscribers: [],
  migrations: [],
});
