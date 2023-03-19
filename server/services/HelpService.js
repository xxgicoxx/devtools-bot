const { constants } = require('../utils');

class HelpService {
  constructor(bot, id) {
    this.bot = bot;
    this.id = id;
  }

  async help() {
    try {
      const commands = [
        { command: '/bcrypt <b>{text}</b>', description: 'Text to bcrypt hash' },
        { command: '/binary <b>{text}</b>', description: 'Text to binary' },
        { command: '/hex <b>{text}</b>', description: 'HEX to ASCII' },
        { command: '/md5 <b>{text}</b>', description: 'Text to MD5 hash' },
        { command: '/short <b>{url}</b>', description: 'Short url' },
        { command: '/slug <b>{text}</b>', description: 'Slug text' },
        { command: '/uuid', description: 'Generate UUID' },
        { command: '/help', description: 'Help' },
      ];
      let message = '';

      message += constants.MESSAGE_HELP;
      message += commands.map((command) => `${command.command} - ${command.description}`).join('\n');

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = HelpService;
