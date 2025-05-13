import dotenv from "dotenv";
import { testConnection } from "./utils/db-connection.js";
import server from "./server.js";
dotenv.config();

(async () => {
  testConnection();
  await server.start();
  console.log("Server listening %s/ ", server.info.uri);
})();
