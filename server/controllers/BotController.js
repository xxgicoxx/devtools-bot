const { telegramConfig } = require('../configs');
const { constants } = require('../utils');

const {
  BcryptService,
  BinaryService,
  HexService,
  MD5Service,
  HelpService,
  ShortService,
  SlugService,
  UUIDService,
} = require('../services');

class BotController {
  constructor(bot, id, text) {
    this.bot = bot;
    this.id = id;
    this.text = text.replace(telegramConfig.username, '');
  }

  async handle() {
    try {
      if (constants.COMMAND_SHORT_REGEX.test(this.text)) {
        const shortService = new ShortService(this.bot, this.id, this.text);

        await shortService.short();
      } else if (constants.COMMAND_SLUG_REGEX.test(this.text)) {
        const slugService = new SlugService(this.bot, this.id, this.text);

        await slugService.slug();
      } else if (constants.COMMAND_HEX_REGEX.test(this.text)) {
        const hexService = new HexService(this.bot, this.id, this.text);

        await hexService.hex();
      } else if (constants.COMMAND_MD5_REGEX.test(this.text)) {
        const mD5Service = new MD5Service(this.bot, this.id, this.text);

        await mD5Service.md5();
      } else if (constants.COMMAND_BCRYPT_REGEX.test(this.text)) {
        const bcryptService = new BcryptService(this.bot, this.id, this.text);

        await bcryptService.bcrypt();
      } else if (constants.COMMAND_BINARY_REGEX.test(this.text)) {
        const binaryService = new BinaryService(this.bot, this.id, this.text);

        await binaryService.binary();
      }

      switch (this.text) {
        case constants.COMMAND_START:
        case constants.COMMAND_COMMANDS:
        case constants.COMMAND_HELP: {
          const helpService = new HelpService(this.bot, this.id);

          await helpService.help();
          break;
        } case constants.COMMAND_UUID: {
          const uUIDService = new UUIDService(this.bot, this.id, this.text);

          await uUIDService.uuid();
          break;
        } default: {
          break;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BotController;
