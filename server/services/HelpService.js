class HelpService {
  constructor(bot, id) {
    this.bot = bot;
    this.id = id;
  }

  async commands() {
    try {
      let message = 'I can help you with many functions.\n\nYou can control me by sending these commands:\n\n';

      message += '<i>/bcrypt {text} - Text to bcrypt hash</i>\n';
      message += '<i>/binary {text} - Text to binary</i>\n';
      message += '<i>/hex {text} - HEX to ASCII</i>\n';
      message += '<i>/md5 {text} - Text to MD5 hash</i>\n';
      message += '<i>/short {url} - Short url</i>\n';
      message += '<i>/slug {text} - Slug text</i>\n';
      message += '<i>/uuid - Generate UUID</i>\n';
      message += '<i>/commands - Command list</i>\n';
      message += '<i>/help - Help</i>\n';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }

  async help() {
    try {
      let message = '<b>Examples:</b>\n';

      message += '<i>/bcrypt xxgicoxx -t</i>\n';
      message += '<i>Output: $2b$10$sFWsmF5WH2vPsdso7aZsNOB8rK1PI.zZ5FKJo9NGmKE9x91kb.zA.</i>\n\n';

      message += '<i>/bcrypt xxgicoxx -h $2b$10$sFWsmF5WH2vPsdso7aZsNOB8rK1PI.zZ5FKJo9NGmKE9x91kb.zA. -c</i>\n';
      message += '<i>Output: true</i>\n\n';

      message += '<i>/binary xxgicoxx -t</i>\n';
      message += '<i>Output: 1111000 1111000 1100111 1101001 1100011 1101111 1111000 1111000</i>\n\n';

      message += '<i>/binary 1111000 1111000 1100111 1101001 1100011 1101111 1111000 1111000 -f</i>\n';
      message += '<i>Output: xxgicoxx</i>\n\n';

      message += '<i>/hex A -t</i>\n';
      message += '<i>Output: 41</i>\n\n';

      message += '<i>/hex 41 -f</i>\n';
      message += '<i>Output: A</i>\n\n';

      message += '<i>/md5 xxgicoxx</i>\n';
      message += '<i>Output: d5da8aba154fa1a4de7773773039cb67</i>\n\n';

      message += '<i>/short http://www.google.com.br</i>\n';
      message += '<i>Output: https://is.gd/7lOUi1</i>\n\n';

      message += '<i>/slug x x g i c o x x</i>\n';
      message += '<i>Output: x-x-g-i-c-o-x-x</i>\n\n';

      message += '<i>/uuid</i>\n';
      message += '<i>Output: 283d560e-3d4d-4454-b87b-caba03678ac8</i>\n\n';

      message += '<b>Accepted params (bcrypt):</b>\n';

      message += '<i>-s (salt default: 10)</i>\n';
      message += '<i>-t (to eg: plain text to bcrypt hash)</i>\n';
      message += '<i>-c (compare eg: compare plain text with bcrypt hash)</i>\n';
      message += '<i>-h (bcrypt hash)</i>\n\n';

      message += '<b>Accepted params (binary, hex):</b>\n';

      message += '<i>-t (to eg: X to Y)</i>\n';
      message += '<i>-f (from eg: Y from X)</i>\n';

      await this.bot.sendMessage(this.id, message, { parse_mode: 'HTML' });
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = HelpService;
