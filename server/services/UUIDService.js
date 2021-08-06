const { v4: uuidv4 } = require('uuid');

class UUIDService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace('/uuid ', '');
  }

  async uuid() {
    try {
      const uuid = uuidv4();

      await this.bot.sendMessage(this.id, uuid);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, 'Error, try again later');
    }
  }
}

module.exports = UUIDService;
