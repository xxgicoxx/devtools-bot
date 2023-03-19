const md5 = require('md5');

const { constants } = require('../utils');

class MD5Service {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_MD5} `, '');
  }

  async md5() {
    try {
      const hash = await md5(this.text);

      await this.bot.sendMessage(this.id, hash);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = MD5Service;
