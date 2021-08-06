const arg = require('arg');
const bcrypt = require('bcryptjs');

class BcryptService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace('/bcrypt ', '');
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
      } else {
        const hash = await bcrypt.hash(value, saltRounds);

        await this.bot.sendMessage(this.id, hash);
      }
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = BcryptService;
