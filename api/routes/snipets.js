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

router.post("/create", async (req, res) => {
  const body = req.body;
  if (
    body.title != undefined &&
    body.markdown != undefined &&
    body.isArchived != undefined
  ) {
    const created = await snipets.insert(body);
    res.json(created);
  } else {
    res.status(502).json({ message: "Bad request" });
  }
});

module.exports = router;
