// PACKAGES
const axios = require('axios');
// MODULES

/**
* Responsible for fetching ask prices from binance API
*/
class RequestController {

    /**
    * Create an instance of RequestController
    * @param {redisController} an instance of RedisController class
    */
    constructor(redisController) {
        this.redisController = redisController;
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
    * Returns an awaitable promise that resolves after fetching given URL,
    * and rejects if the fetching process takes longer than the desired time
    * @param {delay} desired timeout amount in milliseconds
    */
    bookTickerRequest({delay}) {
        return new Promise(async function(resolve, reject) {
            let timeoutControl = setTimeout(function () { return reject("timeout") }, delay);
            let result = null;
            try {
                result = await axios.get('https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT');
                clearTimeout(timeoutControl);
                return resolve(result.data.askPrice);
            } catch (e) {
                return reject(e);
            }
        });
    }

    /**
    * Fetches the price amount and updates redis continuously
    */
    async startRequestService() {
        let currentAskPrice = null;
        while (true) {
            let t0 = Date.now();
            currentAskPrice = null;
            try {
                currentAskPrice = await this.bookTickerRequest({delay: 600});
            } catch (e) {
                console.log(e);
                continue;
            }
            if (currentAskPrice) {
                let isSaved = null;
                try {
                    isSaved = await this.redisController.savePrice(currentAskPrice);
                } catch (e) {
                    console.log(e);
                }
                let t1 = Date.now();
                console.log(`Ask Price: ${currentAskPrice}, estimated process time: ${t1 - t0}ms, ${isSaved}.`);
            }
            await this.timeout(20);
        }
    }




}

module.exports = {
    RequestController: RequestController
};
