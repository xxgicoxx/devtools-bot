# DevTools Serverless
Serverless Telegram Node.js bot for development tools.

![Bot](https://i.imgur.com/tJFSkD0.png)

# Features
* /bcrypt [text] - Text to bcrypt hash
* /binary [text] - Text to binary
* /hex [text] - HEX to ASCII
* /md5 [text] - Text to MD5 hash
* /short [url] - Short url
* /slug [text] - Slug text
* /uuid - Generate UUID
* /commands - Command list
* /help - Help

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Preview
[@toolsdevbot](https://t.me/toolsdevbot)

# Running
### 1. Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Credentials
Save your token from @BotFather
````

### 2. Vercel Deploy
````
# Account
Create an Vercel account on https://vercel.com/

# Install Vercel CLI
npm install -g vercel

# Vercel CLI login
vercel login

# Deploy
vercel

# Set Vercel environment variables
TELEGRAM_TOKEN
TELEGRAM_BOTUSER
````

### 3. Setting up the Telegram webhook
````
curl --location --request POST https://api.telegram.org/bot<YOUR-TELEGRAM-TOKEN>/setWebhook --header 'Content-type: application/json' --data '{"url": "https://project-name.username.vercel.app/api/webhook"}'
````

# About

### Authors
* [xxgicoxx](https://github.com/xxgicoxx/) - Giovani de Oliveira

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon