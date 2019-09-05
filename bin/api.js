"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestx = require("request");
var crypto = require("crypto");
var api = /** @class */ (function () {
    function api(user) {
        this.user = user;
    }
    // POST
    api.prototype.createWallet = function (WalletName, WalletPassword) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Wallet/Create', {
            json: {
                ApiKey: "XnzawXaYLb6tpUZQEHMWAQOzZ09QUFNWVEdSTlROWEhBU0g0",
                SecretKey: "shwcRy2OphRXwxtTVzeva06xxnx4JgrMrPs0jitN7p5QUFNWVEdSTlROWEhBU0g0",
                Email: null,
                WalletName: WalletName,
                WalletPassword: WalletPassword,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.WalletInitialize = function (WalletName, WalletPassword) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Wallet/Initialize', {
            json: {
                ApiKey: "XnzawXaYLb6tpUZQEHMWAQOzZ09QUFNWVEdSTlROWEhBU0g0",
                SecretKey: "shwcRy2OphRXwxtTVzeva06xxnx4JgrMrPs0jitN7p5QUFNWVEdSTlROWEhBU0g0",
                WalletName: WalletName,
                WalletPassword: WalletPassword,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.TransactionSend = function (token, SendAddress, Amount) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Transaction/Send', {
            json: {
                SendAddress: SendAddress,
                Amount: Amount,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.VerifyPaymentStatus = function (token, ReceiveAddress) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Transaction/VerifyPaymentStatus', {
            json: {
                ReceiveAddress: ReceiveAddress,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.GetTransactionDetail = function (token, TransactionHash) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Transaction/GetTransactionDetail', {
            json: {
                TransactionHash: TransactionHash,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.GetTransactionList = function (token) {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Transaction/GetTransactionList", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.GetBlockDetails = function (token, BlockId) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Block/GetBlockDetails", {
            json: {
                BlockId: parseInt(BlockId),
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    // GET
    api.prototype.GetLatestBlocks = function (token) {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Block/GetLatestBlocks", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.GetAllRates = function () {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Rate/GetAllRates", function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.getBalance = function (token) {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Wallet/Balance", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.getNewAddress = function (token) {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Transaction/GetNewAddress", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.apitest = function () {
        requestx.get(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Rate/GetRate", function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.apitest2 = function () {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Block/GetBlocks', {
            json: {
                StartIndex: 1,
                EndIndex: 20,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer 0rXQxPT6N6eJh2BZQDgd22odzda70IgySlDa9QFHlJHLc5bERjFpCMFKDidEjSsS5Yr7y65H-Moy_Y1zmzuSuQy7MAe7JIYhJiPm55Eg8Hvc0YDuyPCTFahbFw9VPXtT48VDXkgD_4cwM1HnVer70uXoKlAnGBBn_gCoLVAqiHn0e9ccdnUMxxSkQ1wg9NA6YRbICD29lP2j8E8Qp-fFiUzuxZ6a2HP5ZhxogafZryGeaY2XxhnX1Pa7iojJ2m9L077zs8g_W_cMOcfiV4x9zVkqErVa7zL4va-0SpLP6NeLls5zLS6rywFJjtLxRg1DKF1FqAVYk2LnMMRFN5kH9CTWNHcRS6-yy9J8j_Q9G6k'
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.RefreshToken = function (refresh_token) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/Token', {
            json: {
                grant_type: "refresh_token",
                refresh_token: refresh_token,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log(body);
        });
    };
    return api;
}());
exports.api = api;
