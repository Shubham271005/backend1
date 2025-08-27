import User from '../model/user.model.js';

export const createUser = async (req, res) => {
    try {
        
        const user = await User.create(req.body);
        res.json({success: true, user});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.json({success: true, user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({success: true, user});
        } catch (error) {
        res.status(500).json({ message: error.message });
        }

    };

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id)
        res.json({success: true, user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({success: true, user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };