var push = require('web-push');

let vapidKeys = {
    publicKey: 'BASl-L1-4IZnSvKdRuq7TKXHvl4hIBEznW0Pp9n3xF_dlYhMGBJjINYzYBwLeyPBWURCzQILjsyK-5vvXb48Mbs',
    privateKey: 'rDwruI__8N8F_jmK5Dykiz3W5IDqcSQ9323KgXsdMGc'
  }

push.setVapidDetails('mail-to: info@printua.info', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/cWoZnkTxFP4:APA91bHjCeQ19g9AqAr9GwkJdJtcz1t_xQuodKJybgd9J1lXq7wSxvwTfhak_PtuHQI5o_1TA55_YhdfSFL8FEKlu80qior_FbI41Jgt7n8oSTVcH9Sufje0ob4yFt1JIpfw57Rv1mXw",
  "expirationTime":null,
  "keys":{
     "p256dh":"BPfJt1uldLssNsrM7vfymzUHXBw_KI2I8GHt_oX23aUPiCkZ_5yO3R53Yzt78B1aOT2U5r7GUuEvPKkZrDIZJ6U",
     "auth":"Pp2BPubL0IPWsOMliByfjA"
  }
};

push.sendNotification(sub, 'test message');