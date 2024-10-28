const express = require('express');
const router = express.Router();

router.post('/api/feed', async (req, res) => {
  try {
    res.status(200).json({ message: 'feed got' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feed' });
  }
});

module.exports = router;
