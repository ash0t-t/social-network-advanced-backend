const express = require('express');
const router = express.Router();
const registerUser = '../services/user';
const loginUser = '../services/user';
const getUserProfile = '../services/user';
const updateUserProfile = '../services/user';
const deleteUser = '../services/user';
const logoutUser = '../services/user';

router.post('/api/users/register', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/api/users/login', async (req, res) => {
  try {
    const { token, userId } = await loginUser(req.body);
    res.status(200).json({ token, userId });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});
router.get('/api/users/profile/:userId', async (req, res) => {
  try {
    const user = await getUserProfile(req.params.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.put('/api/users/profile/:userId', async (req, res) => {
  try {
    const updatedUser = await updateUserProfile(req.params.userId, req.body);
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/api/users/profile/:userId', async (req, res) => {
  try {
    await deleteUser(req.params.userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/api/users/logout', async (req, res) => {
  try {
    await logoutUser();
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
