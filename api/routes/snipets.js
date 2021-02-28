const { Router } = require("express");
const router = Router();
const db = require("monk")("localhost/EssayClipper");
const snipets = db.get("snipets");
snipets.createIndex("title");

/**
 * Data model
 *
 * {
 *    title,
 *    markdown,
 *    isArchived
 * }
 */

router.get("/", async (req, res) => {
  const snipetsList = await snipets.find({ isArchived: false });
  res.json(snipetsList);
});

module.exports = router;
