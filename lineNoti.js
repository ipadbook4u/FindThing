const { parentPort, workerData } = require("worker_threads");

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.token, {polling: false});

parentPort.postMessage(lineNoti(workerData));
function lineNoti(msg) {
bot.sendMessage(process.env.chatId , msg)
    .then((response) => {
    // Handle successful response
    console.log('Message sent successfully:', response);
  parentPort.postMessage("success");
   
  })
  .catch((error) => {
    // Handle error response
    console.error('Error occurred while sending message:', error);
    return "can not send";
  });
  return "send";
}
