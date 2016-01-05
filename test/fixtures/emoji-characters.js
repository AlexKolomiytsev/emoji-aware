'use strict';

var emojis = require('emojilib');

module.exports = Object.keys(emojis)
  .filter(function (key) {
    return emojis[key].char;
  })
  .map(function (key) {
    return emojis[key].char;
  }).concat([
    '👪',
    '💏',
    '💑',
    '👁‍🗨',
    '👨‍👨‍👦',
    '👨‍👨‍👧',
    '👨‍👩‍👦',
    '👨‍👩‍👧',
    '👩‍👩‍👦',
    '👩‍👩‍👧',
    '👨‍❤️‍👨',
    '👩‍❤️‍👨',
    '👩‍❤️‍👩',
    '👨‍👨‍👦‍👦',
    '👨‍👨‍👧‍👦',
    '👨‍👨‍👧‍👧',
    '👨‍👩‍👦‍👦',
    '👨‍👩‍👧‍👦',
    '👨‍👩‍👧‍👧',
    '👩‍👩‍👦‍👦',
    '👩‍👩‍👧‍👦',
    '👩‍👩‍👧‍👧',
    '👨‍❤️‍💋‍👨',
    '👩‍❤️‍💋‍👨',
    '👩‍❤️‍💋‍👩'
  ]);
