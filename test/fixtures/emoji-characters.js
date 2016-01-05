'use strict';

var emojis = require('emojilib');
var _ = require('lodash');

var characters = _(emojis)
  .filter(function (emoji) {
    return emoji.char;
  })
  .map(function (emoji) {
    return emoji.char;
  })
  .value();

characters = characters.concat([
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

module.exports = characters;
