
const User = require('../models/user.js');


 const  createUser = async (req, res) => {

        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.send(user);
    }

    const getUser = async (req, res) => {
        const users = await User.find({});
        res.send(users);
    }

    const deleteUser = async (req, res) => {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
        if (!user) {
            return res.status(404).send();
        } else{
            res.send(user);
        }
    }
module.exports = { createUser, getUser, deleteUser }