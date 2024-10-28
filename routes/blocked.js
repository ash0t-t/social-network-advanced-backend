const express = require('express');
const router = express.Router();
const blocksService = require('../services/blocked');

router.post('/api/users/:userId/block', async (req, res) => {
  try {
    const blocks = await blocksService.block(req.user, req.params.userId);
    res.status(200).json(blocks);
  } catch (error) {
    res.status(500).json({ message: 'Error blocking user' });
  }
});
router.delete('/api/users/:userId/unblock', async (req, res) => {
  try {
    const blocks = await blocksService.unblock(req.user, req.params.userId);
    res.status(200).json(blocks);
  } catch (error) {
    res.status(500).json({ message: 'Error unblocking user' });
  }
});
router.get('/api/users/:userId/blocked', async (req, res) => {
  try {
    const blocks = await blocksService.block(req.user);
    res.status(200).json(blocks);
  } catch (error) {
    res.status(500).json({ message: 'Error getting blocked users' });
  }
});

module.exports = router;
