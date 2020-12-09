// PACKAGES
const redis = require("redis");
const { promisify } = require("util");
// MODULES

/**
* Responsible for saving ask prices as key value pairs to redis DB
*/
class RedisFetcher {

    constructor() {
        this.redisClient = redis.createClient();
        this.sendValueCallback = null;
        this.sendGraphCallback = null;
        this.lastSentAskPrice = null;
    }


    setupEvents(sendValueCallback, sendGraphCallback) {
        this.sendValueCallback = sendValueCallback;
        this.sendGraphCallback = sendGraphCallback;
    }
    

    /**
    * Returns an awaitable promise that resolves after desired milliseconds
    * @param {milliseconds} desired amount of time time in milliseconds
    */
    timeout(milliseconds) {
        return new Promise(function(resolve, reject) {
            setTimeout(function () {
                resolve();
            }, milliseconds);
        });
    }

    /**
    * Returns an awaitable promise that resolves after given value is saved into
    * RedisDB
    * @param {key} desired key name of the pair
    * @param {value} desired value of the pair
    */
    getKeyAsync(key) {
        var self = this;
        return new Promise(function(resolve, reject) {
            try {
                self.redisClient.get(key, function (err, reply) {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    return resolve(reply);
                });
            } catch (e) {
            }
        });
    }

    
    async startFetchingGraph() {
        var self = this;
        while (true) {
            let result = [];
            let errorOccured = false;
            for (let i = 0; i < 50; i++) {
                let graphValue = null;
                try {
                    graphValue = await self.getKeyAsync(i);
                } catch (error) {
                    errorOccured = true;
                    break;
                }
                result.push({[i]: graphValue })
                console.log(i, graphValue);
            }
            if (errorOccured) {
                continue;
            } else if (self.sendGraphCallback !== null) {
                self.sendGraphCallback(result)
            }
            await this.timeout(500);
        }

    }


    async startFetchingValue() {
        var self = this;
        while (true) {
            let result = null;
            try {
                result = await self.getKeyAsync("currentAskPrice")
            } catch (error) {
                console.log(error);    
            }
            if (result !== null && self.sendValueCallback !== null && self.lastSentAskPrice !== result) {
                self.lastSentAskPrice = result;
                self.sendValueCallback(result);
            }
            await this.timeout(50);
        }
    }


}

module.exports = {
    RedisFetcher: RedisFetcher
};
