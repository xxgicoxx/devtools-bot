const arg = require('arg');
const bcrypt = require('bcryptjs');
const { constants } = require('../utils');

class BcryptService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_BCRYPT} `, '');
  }

  async bcrypt() {
    try {
      const args = arg({
        '--salt': Number,
        '--to': Boolean,
        '--compare': Boolean,
        '--hash': String,

        '-s': '--salt',
        '-t': '--to',
        '-c': '--compare',
        '-h': '--hash',
      }, {
        argv: this.text.split(' '),
      });

      const saltRounds = args['--salt'] || 10;
      const compare = args['--compare'];
      const hashText = args['--hash'];
      const value = args._.join(' ');

      if (compare) {
        const result = await bcrypt.compare(value, hashText);

        await this.bot.sendMessage(this.id, result);

        return;
      }

      const hash = await bcrypt.hash(value, saltRounds);

      await this.bot.sendMessage(this.id, hash);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = BcryptService;
