const User = require('../models/user');

const block = async (blocking, blocked) => {
  const user = await User.findById(blocking);
  if (!user) {
    throw new Error('Invalid username');
  }
  user.blocks.push(blocked);
  await user.save();
  return user.blocks;
};

const unblock = async (blocking, blocked) => {
  const user = await User.findById(blocking);
  if (!user) {
    throw new Error('Invalid username');
  }
  user.blocks.filter(elm => elm != blocked);
  await user.save();
  return user.blocks;
};

const blocks = async (username) => {
  const user = await User.findById(username);
  if (!user) {
    throw new Error('Invalid username');
  }
  return user.blocks;
};

module.exports = { block, unblock, blocks };