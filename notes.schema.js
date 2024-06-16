const mongoose = require("mongoose");

// Define the Schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;
