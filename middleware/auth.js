const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;

const express = require('express');
const { createPost, likePost } = require('../services/post-service');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.post('/post', authMiddleware, async (req, res) => {
  try {
    await createPost(req.body);
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

router.post('/post/:postId/like', authMiddleware, async (req, res) => {
  try {
    await likePost(req.params.postId, req.user); 
    res.status(200).json({ message: 'Post liked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error liking post' });
  }
});

module.exports = router;