const  Director  = require("../models/moduloDirector");
const mongoose = require("mongoose");

const getDirector = async (req, res) => {
    try {
        const director = await Director.find();
        res.status(200).json(director);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
//______________________________________________________________________________________________________________
const getDirectorById = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const director = await Director.findById(_id);
        res.status(200).json(director);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//-------------------------------------------------------------------------------------------------------------------
const createDirector = async (req, res) => {
    const director = req.body;
    const newDirector = new Director(director);
    try {
        await newDirector.save();
        res.status(201).json(newDirector);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


//______________________________________________________________________________________________________________


const updateDirector = async (req, res) => {
    const { id: _id } = req.params;
    const director = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No director with that id");
    }
    const updatedDirector = await Director.findByIdAndUpdate(
        _id,
        director,
        { new: true }
    );
    res.json(updatedDirector);
};


//______________________________________________________________________________________________________________


const deleteDirector = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No director with that id");
    }
    const deletedDirector = await Director.findOneAndDelete();
    res.json(deletedDirector);
};

//______________________________________________________________________________________________________________

module.exports = {
  getDirectorById,
  getDirector,
  createDirector,
  updateDirector,
  deleteDirector
};