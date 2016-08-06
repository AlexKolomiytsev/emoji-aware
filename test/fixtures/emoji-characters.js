'use strict';

var emojis = require('emojilib');

module.exports = Object.keys(emojis.lib)
  .filter(function (key) {
    return emojis.lib[key].char;
  })
  .map(function (key) {
    return emojis.lib[key].char;
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
