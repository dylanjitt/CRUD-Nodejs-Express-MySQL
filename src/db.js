import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "parcial1devops.c70equao8ydi.us",
  user: "admin",
  password: "D9i4e5g5o", // Coloca tu contraseña de MySQL
  database: "parcial1dyl",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
