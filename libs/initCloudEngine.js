const AV = require('leanengine');
const { APP_ID, APP_KEY, MASTER_KEY, } = require('./configs');

const initCloudEngine = () => {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
      masterKey: MASTER_KEY,
    });
    AV.Cloud.useMasterKey();
};

module.exports = initCloudEngine;