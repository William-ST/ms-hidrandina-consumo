const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
};

let pool;

(async () => {
  console.log("HERE 1")
  pool = await mysql.createPool(dbConfig);
  console.log("HERE 2")
  console.log(dbConfig)
})();

app.get("/", (req, res) => {
  res.send("Servidor activo");
});

app.get("/buscar-consumo/:fecha", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM consumo WHERE FECHA_VENCIMIENTO = ?", [
      req.params.fecha,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8000, () => console.log("Microservicio corriendo en puerto 8000"));
