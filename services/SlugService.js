const slug = require('slug.js');

class SlugService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace('/slug ', '');
  }

  async slug() {
    try {
      const slugged = await slug.slugify(this.text);

      await this.bot.sendMessage(this.id, slugged);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = SlugService;
