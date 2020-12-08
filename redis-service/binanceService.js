// PACKAGES
// MODULES
const RedisController = require('./redisController').RedisController;
const RequestController = require('./requestController').RequestController;

class BinanceService {

    constructor() {
        this.redisController = new RedisController();
        this.requestController = new RequestController(this.redisController);
    }

    startService() {
        this.requestController.startRequestService();
    }
}

var binanceService = new BinanceService();
binanceService.startService();
