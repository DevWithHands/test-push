var push = require('web-push');

let vapidKeys = {
    publicKey: 'BASl-L1-4IZnSvKdRuq7TKXHvl4hIBEznW0Pp9n3xF_dlYhMGBJjINYzYBwLeyPBWURCzQILjsyK-5vvXb48Mbs',
    privateKey: 'rDwruI__8N8F_jmK5Dykiz3W5IDqcSQ9323KgXsdMGc'
  }

push.setVapidDetails('mail-to: info@printua.info', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');