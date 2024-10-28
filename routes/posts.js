const express = require('express');
const postService = require('../services/post');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/api/posts', authMiddleware, async (req, res) => {
  try {
    const post = await postService.createPost(req.user, req.body);
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/api/posts', async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/api/posts/:postId', async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.postId);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put('/api/posts/:postId', authMiddleware, async (req, res) => {
  try {
    const updatedPost = await postService.updatePost(
      req.user,
      req.params.postId,
      req.body
    );
    res.status(200).json({ message: 'Post updated successfully', updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/api/posts/:postId', authMiddleware, async (req, res) => {
  try {
    await postService.deletePost(req.user, req.params.postId);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/api/posts/:postId/like', authMiddleware, async (req, res) => {
  try {
    const likedPost = await postService.likePost(req.user, req.params.postId);
    res.status(200).json({ message: 'Post liked successfully', likedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
