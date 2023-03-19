const slug = require('slug.js');

const { constants } = require('../utils');

class SlugService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_SLUG} `, '');
  }

  async slug() {
    try {
      const slugged = await slug.slugify(this.text);

      await this.bot.sendMessage(this.id, slugged);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = SlugService;
