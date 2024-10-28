const express = require('express');
const commentService = require('../services/comment.js');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/api/comments/:postId/comments', authMiddleware, async (req, res) => {
    try {
        const comment = await commentService.addComment(req.user, req.params.postId, req.body);
        res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/api/comments/:postId/comments', async (req, res) => {
    try {
        const comments = await commentService.getAllComments(req.params.postId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/api/comments/:postId/comments/:commentId', authMiddleware, async (req, res) => {
    try {
        const updatedComment = await commentService.updateComment(req.user, req.params.postId, req.params.commentId, req.body);
        res.status(200).json({ message: 'Comment updated successfully', updatedComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/api/comments/:postId/comments/:commentId', authMiddleware, async (req, res) => {
    try {
        await commentService.deleteComment(req.user, req.params.postId, req.params.commentId);
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;