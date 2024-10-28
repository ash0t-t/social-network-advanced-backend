const User = require('../models/user');
const generateToken = require('../utils/jwt');

const registerUser = async (data) => {
  const { username, email, password } = data;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  const user = new User({ username, email, password });
  await user.save();
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user._id);
  return { token, userId: user._id };
};

const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password'); // Exclude password
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const updateUserProfile = async (userId, updateData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  user.username = updateData.username || user.username;
  user.email = updateData.email || user.email;

  await user.save();
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
      throw new Error('User not found');
  }

  await user.remove();
};

const logoutUser = async () => {
  return;
};


module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser, logoutUser };
