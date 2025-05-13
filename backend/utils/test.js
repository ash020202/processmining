import sql from "mssql";

const config = {
  user: "sa", // your username
  password: "Vimal@2030", // your password
  server: "LMT-L099", // or your server name
  database: "process_mining", // your DB name
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Needed for local dev/self-signed cert
    instanceName: "SQLEXPRESS", // SQL Express instance name (optional if using default instance)
  },
};

sql
  .connect(config)
  .then((pool) => {
    console.log("✅ Connected to MSSQL");

    return pool.request().query("SELECT TOP 10 * FROM your_table");
  })
  .then((result) => {
    console.dir(result.recordset);
  })
  .catch((err) => {
    console.error("❌ SQL Connection Error:", err);
  });
