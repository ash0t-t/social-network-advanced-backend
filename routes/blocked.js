const express = require('express');
const router = express.Router();

router.post('/api/users/:userId/block', async (req, res) => {
  try {
    res.status(200).json({ message: 'user blocked' });
  } catch (error) {
    res.status(500).json({ message: 'Error blocking user' });
  }
});
router.delete('/api/users/:userId/unblock', async (req, res) => {
  try {
    res.status(200).json({ message: 'user unblocked' });
  } catch (error) {
    res.status(500).json({ message: 'Error unblocking user' });
  }
});
router.get('/api/users/:userId/blocked', async (req, res) => {
  try {
    res.status(200).json({ message: 'got blocked users' });
  } catch (error) {
    res.status(500).json({ message: 'Error getting blocked users' });
  }
});

module.exports = router;
