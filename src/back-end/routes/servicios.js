const express = require("express");
const router = express.Router();
const fs = require("fs").promises;

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("./servicios.json", "utf8");
    const servicios = JSON.parse(data);

    return res.status(200).json(servicios);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo obtener los servicios" });
  }
});

module.exports = router;
