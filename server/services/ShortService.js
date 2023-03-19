const kurzer = require('kurzer-url');
const ehUrl = require('eh-url');

const { constants } = require('../utils');

class ShortService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_SHORT} `, '');
  }

  async short() {
    try {
      const validUrl = await ehUrl(this.text);

      if (!validUrl) {
        await this.bot.sendMessage(this.id, constants.MESSAGE_INVALID_URL);

        return;
      }

      const url = await kurzer(this.text);

      await this.bot.sendMessage(this.id, url);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = ShortService;
