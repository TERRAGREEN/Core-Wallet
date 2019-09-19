"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestx = require("request");
var crypto = require("crypto");
var fs = require("fs");
var os = require("os");
var chalk_1 = require("chalk");
var PATH = 'C:\\Users\\' + os.userInfo().username + '\\Desktop\\wallet';
var api = /** @class */ (function () {
    function api(user) {
        this.user = user;
    }
    // POST
    api.prototype.createWallet = function (Email) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Core/Create', {
            json: {
                Email: Email,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            if (!fs.existsSync(PATH)) {
                fs.mkdirSync(PATH);
            }
            if (body.PrivateKey !== undefined) {
                console.log('\n \n ', chalk_1.default.cyan('Please copy the private key given below in a secure location.'), ' \n\n', '\n \n ', chalk_1.default.cyan('Also we have stored your Privare key on location "C:/Users/a/Desktop/wallet'), ' \n\n', chalk_1.default.green(body.PrivateKey));
                fs.writeFile(PATH + '\\' + Email + '.txt', body.PrivateKey, function (err) {
                    if (err) {
                    }
                });
            }
            else {
                //  console.log(body.Message);
                console.log(chalk_1.default.red(body.Message));
            }
        });
    };
    api.prototype.WalletInitialize = function (PrivateKey) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Core/Login', {
            json: {
                PrivateKey: PrivateKey
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                //return
            }
            if (body.Status === true) {
                console.log(navigator);
                console.log('\n\n Hi! ', chalk_1.default.cyan(body.Data.userName), '\n\n Here is your token!  \n\n', chalk_1.default.green(body.Data.access_token));
            }
            else
                console.log(chalk_1.default.red('Invalid Private Key'));
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
            if (body.Status === true) {
                console.log('\n', chalk_1.default.cyan(body.Message), '\n');
            }
            else if (body.Status === false) {
            }
            else {
                console.log('\nresponse=>\n', body);
            }
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
    api.prototype.GetWalletAddressBalance = function (token, WalletAddress) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Wallet/AddressBalance", {
            json: {
                WalletAddress: WalletAddress,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (something, request, response) {
            console.log('\nresponse=>\n', response);
        });
    };
    api.prototype.GetTransactionListByAddress = function (token, WalletAddress, PageIndex, Pagesize) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + "/api/Transaction/TransactionListByAddress", {
            json: {
                WalletAddress: WalletAddress,
                PageIndex: isNaN(PageIndex) ? 1 : PageIndex,
                Pagesize: isNaN(Pagesize) ? 10 : Pagesize
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
            response = JSON.parse(response);
            //  console.log('\nresponse=>\n', response.Status , typeof(response) );
            if (response.Status === true) { //   console.log('\nres=>\n');
                console.log('\n', chalk_1.default.green(response.Message), '\n Wallet Name: ', chalk_1.default.blue(response.Data.WalletName), '\n Balance: ', chalk_1.default.yellow(response.Data.Balance), '\n Locked Balance: ', chalk_1.default.yellow(response.Data.LockedBalance), '\n');
            }
            else {
                console.log(chalk_1.default.red('Invalid Token'));
            }
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
    api.prototype.apitest2 = function (token) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Block/GetBlocks', {
            json: {
                StartIndex: 1,
                EndIndex: 20,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
            }
        }, function (error, res, body) {
            if (error) {
                console.error(error);
                return;
            }
            console.log('\nresponse=>\n', body);
        });
    };
    api.prototype.GetBlockNumber = function (token) {
        requestx.post(crypto.createDecipher("aes-256-gcm", '4vdf4s84r235fse5').update('0323941a59b1c2e0efac954880141112548fe86a50c852464b', "hex", "binary") + '/api/Block/GetBlocks', {
            json: {
                StartIndex: 1,
                EndIndex: 1,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token,
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
    api.prototype.help = function () {
        var help = [
            {
                name: "Create wallet",
                discription: "create Wallet Account",
                syntax: "terragreen createwallet <email Address> ",
            },
            {
                name: "Login wallet",
                discription: "Login Into Wallet",
                syntax: "terragreen login <private Key> ",
            },
            {
                name: "Token ",
                discription: "get New Access-token From Your Refresh-token To Access All Authorized Apis.",
                syntax: "terragreen refreshtoken <token>",
            },
            {
                name: "Wallet balance",
                discription: "get Wallet Balance",
                syntax: "terragreen getbalance <token>",
            },
            {
                name: "get All Rates",
                discription: "to Get Rate Of Tgn Coin",
                syntax: "terragreen getallrates",
            },
            {
                name: "get Rate",
                discription: "get Tgcoin's Current Rates.",
                syntax: "terragreen getrate",
            },
            {
                name: "get New Address",
                discription: "get New Receive Address.",
                syntax: "terragreen Getnewaddress <token>",
            },
            {
                name: "transaction Send",
                discription: "send Amount To Other User's Wallet.",
                syntax: "terragreen Send <token> <sendaddress> <amount>",
            },
            {
                name: "get Transaction List",
                discription: "get Transaction List Of The User.",
                syntax: "terragreen Gettransactionlist <token>",
            },
            {
                name: "verify Payment Status",
                discription: "verify Transaction's Payment Status.",
                syntax: "terragreen Verifypaymentstatus <token> <receiveaddress>",
            },
            {
                name: "get Transaction Detail",
                discription: "Get Transaction's Detail Of Given Transactionhash.",
                syntax: "terragreen Gettransactiondetail <token> <transactionhash>",
            },
            {
                name: "get Blocks",
                discription: "get Blocklist.",
                syntax: "terragreen Getblocks",
            },
            {
                name: "get Blocks Details",
                discription: "get Block Details.",
                syntax: "terragreen Getblockdetails <token> <blockid>",
            },
            {
                name: "get Latest Blocks",
                discription: "gets Latest Block List.",
                syntax: "terragreen Getlatestblocks <token>",
            },
            {
                name: "get Address balance",
                discription: "getaddressbalance.",
                syntax: "terragreen getaddressbalance <token> <address>",
            },
            {
                name: "get Transaction list by address",
                discription: "gettransactionlistbyaddress.",
                syntax: "terragreen gettransactionlistbyaddress <token> <address> <starting-index> <ending-index>",
            },
            {
                name: "get Block number",
                discription: "getblocknumber.",
                syntax: "terragreen getblocknumber <token>",
            },
        ];
        var argument = ["privatekey", "token", "address", "amount", "sendaddress", "recieveaddress", "transactionhash", "blockid"];
        var usageview = "\n";
        var descriptiion = "\n";
        var argumentview = "\n";
        argument.forEach(function (e) {
            argumentview = argumentview + "  <" + e + ">\n";
        });
        help.forEach(function (e) {
            usageview = usageview + "  " + e.syntax + "\n";
            descriptiion = descriptiion + "  " + e.name + ": " + e.discription + "\n";
        });
        var helpview = "\n Usage: " + usageview + "\n Arguments: " + argumentview
            + "\n Descriptiion: " + descriptiion;
        console.log(helpview);
    };
    return api;
}());
exports.api = api;
