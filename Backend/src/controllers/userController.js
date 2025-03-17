import userModel from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a user by ID
export const updateUserById = async (req, res) => {
    try {
        const [updated] = await userModel.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ success: false, error: "User not found or no changes made" });
        }
        res.status(200).json({ success: true, message: "User updated successfully" });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
    try {
        const deleted = await userModel.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
