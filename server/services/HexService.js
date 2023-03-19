const arg = require('arg');

const { constants } = require('../utils');

class HexService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_HEX} `, '');
  }

  async hex() {
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
        const ascii = Buffer.from(value, 'hex').toString('ascii');

        await this.bot.sendMessage(this.id, ascii);

        return;
      }

      const hex = Buffer.from(value, 'ascii').toString('hex');

      await this.bot.sendMessage(this.id, hex);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = HexService;
