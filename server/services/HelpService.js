class HelpService {
  constructor(bot, id) {
    this.bot = bot;
    this.id = id;
  }

  async help() {
    try {
      let message = '<b>I can help you with many functions.\n\nYou can control me by sending these commands:\n\n</b>';
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

      commands.forEach((command) => {
        message += `${command.command} - ${command.description}\n`;
      });

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = HelpService;
