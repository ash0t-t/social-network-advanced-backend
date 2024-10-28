const express = require('express');
const router = express.Router();

router.get('/api/notifications', async (req, res) => {
  try {
    res.status(200).json({ message: 'notifications retrieved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notifications' });
  }
});
router.post(
  '/api/notifications/mark-read/:notificationId',
  async (req, res) => {
    try {
      res.status(200).json({ message: 'notification marked as read' });
    } catch (error) {
      res.status(500).json({ message: 'Error marking notification as read' });
    }
  }
);
router.delete('/api/notifications/:notificationId', async (req, res) => {
  try {
    res.status(200).json({ message: 'notification deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting notifications' });
  }
});

module.exports = router;
