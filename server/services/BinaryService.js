const arg = require('arg');

const { constants } = require('../utils');

class BinaryService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_BINARY} `, '');
  }

  async binary() {
    try {
      const args = arg({
        '--to': Boolean,
        '--from': Boolean,

        '-t': '--to',
        '-f': '--from',
      }, {
        argv: this.text.split(' '),
      });

      const from = args['--from'];
      const value = args._.join(' ');

      if (from) {
        let text = '';

        value.split(' ').map((bin) => {
          text += String.fromCharCode(parseInt(bin, 2));

          return text;
        });

        await this.bot.sendMessage(this.id, text);

        return;
      }

      let binary = '';

      for (let i = 0; i < value.length; i += 1) {
        binary += `${value[i].charCodeAt(0).toString(2)} `;
      }

      await this.bot.sendMessage(this.id, binary);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = BinaryService;
