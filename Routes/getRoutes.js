const express = require("express");
const Notes = require("../notes.schema");
const router = express.Router();

//Get random number of notes
router.get("/random", async (req, res) => {
    try {
        const notes = await Notes.find();
        const shuffledNotes = shuffle(notes);
        const randomArr = getRandomSubset(shuffledNotes);
        return res.status(200).json(randomArr);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

//Get All Notes
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

//get note based on ID
router.get("/:id", async (req, res) => {
    try {
        const note = await Notes.findOne({ _id: req.params.id });
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

//Helpers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomSubset(array) {
    const length = Math.floor(Math.random() * array.length) + 1;
    return array.slice(0, length);
}

module.exports = router;
