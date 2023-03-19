module.exports = Object.freeze({
  MESSAGE_HELP: '<b>I can help you with many functions.\n\nYou can control me by sending these commands:\n\n</b>',
  MESSAGE_ERROR_TRY_AGAIN: 'Error, try again later',
  MESSAGE_INVALID_URL: 'Invalid URL',

  COMMAND_START: '/start',
  COMMAND_COMMANDS: '/commands',
  COMMAND_HELP: '/help',
  COMMAND_UUID: '/uuid',

  COMMAND_SHORT: '/short',
  COMMAND_SLUG: '/slug',
  COMMAND_HEX: '/hex',
  COMMAND_MD5: '/md5',
  COMMAND_BCRYPT: '/bcrypt',
  COMMAND_BINARY: '/binary',

  COMMAND_SHORT_REGEX: /\/short (.+)/,
  COMMAND_SLUG_REGEX: /\/slug (.+)/,
  COMMAND_HEX_REGEX: /\/hex (.+)/,
  COMMAND_MD5_REGEX: /\/md5 (.+)/,
  COMMAND_BCRYPT_REGEX: /\/bcrypt (.+)/,
  COMMAND_BINARY_REGEX: /\/binary (.+)/,

  ON_MESSAGE: 'message',
});
