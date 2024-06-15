const express = require("express");
const Notes = require("../notes.schema");
const router = express.Router();

router.post("/note", async (req, res) => {
    try {
        let noteObj = new Notes({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
        });

        console.log(noteObj);

        const existingNote = await Notes.findOne({ id: noteObj.id });

        console.log(existingNote);

        if (!existingNote) {
            console.log("Inside if block");
            const note = await noteObj.save((error, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            });
            console.log(note);
            return res.status(200).json({
                message: "Note saved successfully",
            });
        } else {
            return res.status(401).json({
                error: "Note with same id already present",
            });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;

// memo -> React
// useMemo(()=>{

// })
