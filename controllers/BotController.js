const { telegramConfig } = require('../configs');

const {
  MessageService,
  BcryptService,
  BinaryService,
  ShortService,
  SlugService,
  UUIDService,
  HexService,
  MD5Service,
} = require('../services');

class BotController {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(telegramConfig.botuser, '');
  }

  async handle() {
    if (this.text === '/start' || this.text === '/commands') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.commands();
    } if (this.text === '/help') {
      const messageService = new MessageService(this.bot, this.id);

      await messageService.help();
    } else if (this.text === '/uuid') {
      const uUIDService = new UUIDService(this.bot, this.id, this.text);

      await uUIDService.uuid();
    } else if (/\/short (.+)/.test(this.text)) {
      const shortService = new ShortService(this.bot, this.id, this.text);

      await shortService.short();
    } else if (/\/slug (.+)/.test(this.text)) {
      const slugService = new SlugService(this.bot, this.id, this.text);

      await slugService.slug();
    } else if (/\/hex (.+)/.test(this.text)) {
      const hexService = new HexService(this.bot, this.id, this.text);

      await hexService.hex();
    } else if (/\/md5 (.+)/.test(this.text)) {
      const mD5Service = new MD5Service(this.bot, this.id, this.text);

      await mD5Service.md5();
    } else if (/\/bcrypt (.+)/.test(this.text)) {
      const bcryptService = new BcryptService(this.bot, this.id, this.text);

      await bcryptService.bcrypt();
    } else if (/\/binary (.+)/.test(this.text)) {
      const binaryService = new BinaryService(this.bot, this.id, this.text);

      await binaryService.binary();
    }
  }
}

module.exports = BotController;
