// PACKAGES
const redis = require("redis");
const { promisify } = require("util");
// MODULES

/**
* Responsible for saving ask prices as key value pairs to redis DB
*/
class RedisController {

    /**
    * Create an instance of RedisController
    */
    constructor() {
        this.redisClient = redis.createClient();
        this.valuesList = [];
    }


    /**
    * Returns an awaitable promise that resolves after given value is saved,
    * into RedisDB, and rejects if the saving process fails
    * @param {price} desired value of the price
    */
    savePrice(price) {
        var self = this;
        return new Promise(async function(resolve, reject) {
            try {
                await self.setKeyAsync("currentAskPrice", price);
            } catch (e) {
                console.log(e);
                return reject(e);
            }
            resolve('Saved');
            if (self.valuesList.length >= 50) {
                self.valuesList.shift();
            }
            self.valuesList.push(price);
            let prices = [];
            for (var i = 0; i < self.valuesList.length; i++) {
                prices.push(i);
                prices.push(self.valuesList[i]);
            }
            // console.log(prices);
            self.redisClient.mset(prices, (err, reply) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }

    /**
    * Returns an awaitable promise that resolves after given value is saved into
    * RedisDB
    * @param {key} desired key name of the pair
    * @param {value} desired value of the pair
    */
    setKeyAsync(key, value) {
        var self = this;
        return new Promise(function(resolve, reject) {
            try {
                self.redisClient.set(key, value, function (err, reply) {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    return resolve(reply)
                });
            } catch (e) {

            } finally {

            }
        });
    }

}

module.exports = {
    RedisController: RedisController
};
