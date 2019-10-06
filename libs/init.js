const initCloudEngine = require('./initCloudEngine');
const initClientEngine = require('./initClientEngine');

const init = () => {
    initCloudEngine();
    initClientEngine();
};
  
module.exports = init;