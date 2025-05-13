import { AppDataSource } from "../config/data-source.js";

export const testConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected success");
  } catch (error) {
    console.error("Error connecting to MSSQL:", error);
  }
};
