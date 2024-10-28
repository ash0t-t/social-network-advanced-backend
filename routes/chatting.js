const express = require('express');
const router = express.Router();

router.post('/api/chat', async (req, res) => {
  try {
    res.status(200).json({ message: 'chat started' });
  } catch (error) {
    res.status(500).json({ message: 'Error starting chat' });
  }
});
router.get('/api/chat', async (req, res) => {
  try {
    res.status(200).json({ message: 'all chats got' });
  } catch (error) {
    res.status(500).json({ message: 'Error getting chats' });
  }
});
router.post('/api/chat/:chatId/message', async (req, res) => {
  try {
    res.status(200).json({ message: 'msg sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending msg' });
  }
});
router.get('/api/chat/:chatId/messages', async (req, res) => {
  try {
    res.status(200).json({ message: 'msgs got' });
  } catch (error) {
    res.status(500).json({ message: 'Error getting msgs' });
  }
});
router.put('/api/chat/:chatId/message/:messageId', async (req, res) => {
  try {
    res.status(200).json({ message: 'msg edited' });
  } catch (error) {
    res.status(500).json({ message: 'Error editing msgs' });
  }
});
router.delete('/api/chat/:chatId/message/:messageId', async (req, res) => {
  try {
    res.status(200).json({ message: 'msg deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting msg' });
  }
});

module.exports = router;
