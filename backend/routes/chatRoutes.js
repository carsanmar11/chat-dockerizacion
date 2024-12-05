const express = require('express');
const { getChats, sendMessage, getMessages } = require('../controllers/chatController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/', authenticate, getChats);
router.post('/messages', authenticate, sendMessage);
router.get('/messages/:chatId', authenticate, getMessages);

module.exports = router;