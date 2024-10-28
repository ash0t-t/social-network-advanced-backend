const express = require('express');
const router = express.Router();

router.post('/api/users/:userId/follow', async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: 'Error following' });
  }
});
router.delete('/api/users/:userId/unfollow', async (req, res) => {
  try {
    res.status(200).json({ message: 'unflwed' });
  } catch (error) {
    res.status(500).json({ message: 'Error unflwing' });
  }
});
router.get('/api/users/:userId/followers', async (req, res) => {
  try {
    res.status(200).json({ message: 'followers got' });
  } catch (error) {
    res.status(500).json({ message: 'Error getting followers' });
  }
});
router.get('/api/users/:userId/following', async (req, res) => {
  try {
    res.status(200).json({ message: 'followings retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving followings' });
  }
});

module.exports = router;
