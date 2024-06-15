const mongoose = require("mongoose");

// Define the Schema
const noteSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
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
    { timestamps: true, _id: false }
);

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;
