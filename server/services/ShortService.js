const kurzer = require('kurzer-url');
const ehUrl = require('eh-url');

class ShortService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace('/short ', '');
  }

  async short() {
    try {
      const validUrl = await ehUrl(this.text);

      if (!validUrl) {
        await this.bot.sendMessage(this.id, 'Invalid URL');
      } else {
        const url = await kurzer(this.text);

        await this.bot.sendMessage(this.id, url);
      }
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = ShortService;
