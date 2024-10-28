const express = require('express');
const router = express.Router();

router.get('/api/search/users', async (req, res) => {
  try {
    res.status(200).json({ message: 'search for users' });
  } catch (error) {
    res.status(500).json({ message: 'Error searching users' });
  }
});
router.get('/api/search/posts', async (req, res) => {
  try {
    res.status(200).json({ message: 'search for posts' });
  } catch (error) {
    res.status(500).json({ message: 'Error searching posts' });
  }
});

module.exports = router;
