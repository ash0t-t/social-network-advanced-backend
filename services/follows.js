const User = require('../models/user');

const follow = async (follower, following) => {
  const user = await User.findById(following);
  if (!user) {
    throw new Error('Invalid username');
  }
  user.followers.push(following);
  await user.save();
  return user.followers;
};

const unfollow = async (unfollower, unfollowing) => {
  const user = await User.findById(following);
  if (!user) {
    throw new Error('Invalid username');
  }
  user.followers.filter(elm => elm != unfollower);
  await user.save();
  return user.followers;
};

const followers = async (username) => {
  const user = await User.findById(username);
  if (!user) {
    throw new Error('Invalid username');
  }
  return user.followers;
};

const followings = async (username) => {
  const user = await User.findById(username);
  if (!user) {
    throw new Error('Invalid username');
  }
  return user.followings;
};

module.exports = { follow, unfollow, followers, followings };