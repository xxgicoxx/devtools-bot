const { v4: uuidv4 } = require('uuid');

const { constants } = require('../utils');

class UUIDService {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(`${constants.COMMAND_UUID} `, '');
  }

  async uuid() {
    try {
      const uuid = uuidv4();

      await this.bot.sendMessage(this.id, uuid);
    } catch (error) {
      console.error(error);

      await this.bot.sendMessage(this.id, constants.MESSAGE_ERROR_TRY_AGAIN);
    }
  }
}

module.exports = UUIDService;
