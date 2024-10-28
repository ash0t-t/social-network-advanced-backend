const express = require('express');
const router = express.Router();

router.post('/api/uploads/post', async (req, res) => {
  try {
    res.status(200).json({ message: 'post uploaded' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading post' });
  }
});
router.delete('/api/uploads/:fileId', async (req, res) => {
  try {
    res.status(200).json({ message: 'media deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting media' });
  }
});

module.exports = router;
