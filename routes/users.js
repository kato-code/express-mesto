const router = require('express').Router();
const {
  getUsers,
  getUserId,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users.js');

router.get('/users', getUsers);
router.get('/users/:_id', getUserId);
router.post('/users', createUser);
router.patch('/users/me', updateUserProfile);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
