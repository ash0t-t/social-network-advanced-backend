const express = require('express');
const router = express.Router();
const followsService = require('../services/follows');

router.post('/api/users/:userId/follow', async (req, res) => {
  try {
    const followers = await followsService.follow(req.user, req.params.userId);
    res.status(200).json(followers);
  } catch (error) {
    res.status(500).json({ message: 'Error following' });
  }
});
router.delete('/api/users/:userId/unfollow', async (req, res) => {
  try {
    const followers = await followsService.unfollow(req.user, req.params.userId);
    res.status(200).json(followers);
  } catch (error) {
    res.status(500).json({ message: 'Error unflwing' });
  }
});
router.get('/api/users/:userId/followers', async (req, res) => {
  try {
    const followers = await followsService.followers(req.user);
    res.status(200).json(followers);
  } catch (error) {
    res.status(500).json({ message: 'Error getting followers' });
  }
});
router.get('/api/users/:userId/following', async (req, res) => {
  try {
    const followings = await followsService.followings(req.user);
    res.status(200).json(followings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving followings' });
  }
});

module.exports = router;
