const express = require("express");
const Notes = require("../notes.schema");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const notes = await Notes.find();
        if (!notes) {
            return res.status(404).json({
                error: "Notes not found",
            });
        }
        return res.status(200).json(notes);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// localhost:8001/api/get/id?1&&desc?2

router.get("/:id", async (req, res) => {
    try {
        const param = req.params.id;
        const note = await Notes.findOne({ id: param });
        if (!note) {
            return res.status(404).json({
                error: "Note not found",
            });
        }
        return res.status(200).json(note);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
