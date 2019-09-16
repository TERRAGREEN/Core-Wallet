#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var argc = process.argv.splice(2);
var User = new api_1.api(argc[0]);
switch (argc[0]) {
    // case 'refreshtoken': User.RefreshToken(argc[1], argc[2]);
    //     break;
    case 'refreshtoken':
        User.RefreshToken(argc[1]);
        break;
    case 'login':
        User.WalletInitialize(argc[1]);
        break;
    case 'createwallet':
        User.createWallet(argc[1]);
        break;
    case 'send':
        User.TransactionSend(argc[1], argc[2], argc[3]);
        break;
    case 'getbalance':
        User.getBalance(argc[1]);
        break;
    case 'verifyPaymentstatus':
        User.VerifyPaymentStatus(argc[1], argc[2]);
        break;
    case 'gettransactiondetail':
        User.GetTransactionDetail(argc[1], argc[2]);
        break;
    case 'gettransactionlist':
        User.GetTransactionList(argc[1]);
        break;
    case 'getnewaddress':
        User.getNewAddress(argc[1]);
        break;
    case 'getblockdetails':
        User.GetBlockDetails(argc[1], argc[2]);
        break;
    case 'getlatestblocks':
        User.GetLatestBlocks(argc[1]);
        break;
    case 'getrate':
        User.apitest();
        break;
    case 'getallrates':
        User.GetAllRates();
        break;
    case 'getblocks':
        User.apitest2();
        break;
    case '--help':
        console.log("\n Terragreen CLI \n version: 1.0.0 \n\n\n  Wallet CREATE :\t\tCreate Wallet Account \n\n\t\t\tUsage: terragreen createWallet <Email Address>  \n\n  Wallet Login :\tLogin into Wallet \n\n\t\t\tUsage: terragreen login <Private key>  \n\n  Token :\t\t\tGet new access-token from your refresh-token to access all authorized apis. \n\n\t\t\tUsage: terragreen refreshtoken <Token> \n\n  Wallet Balance :\tGet wallet balance. \n\n\t\t\tUsage: terragreen getbalance <Token> \n\n  Get All Rates :\t\tTo Get Rate of TGN coin \n\n\t\t\tUsage: terragreen getallrates \n\n  Get Rate :\t\tGet TGCoin's current rates. \n\n\t\t\tUsage: terragreen getrate \n\n  Get New Address :\tGet new receive address. \n\n\t\t\tUsage: terragreen getnewaddress <Token> \n\n  Transaction Send :\tSend amount to other user's wallet. \n\n\t\t\tUsage: terragreen send <Token> <SendAddress> <Amount>\n\n  Get Transaction List :\tGet transaction list of the user. \n\n\t\t\tUsage: terragreen gettransactionlist <Token> \n\n  Verify Payment Status :\tVerify transaction's payment status. \n\n\t\t\tUsage: terragreen verifyPaymentstatus <Token> <ReceiveAddress> \n\n  Get Transaction Detail: get transaction's detail of given TransactionHash. \n\n\t\t\tUsage: terragreen gettransactiondetail <Token> <TransactionHash> \n\n  Get Blocks :\t\tGet Blocklist. \n\n\t\t\tUsage: terragreen getblocks \n\n  Get Blocks Details :\tGet block details. \n\n\t\t\tUsage: terragreen getblockdetails <Token> <BlockId>\n\n  Get Latest Blocks :\tGets latest block list. \n\n\t\t\tUsage: terragreen getlatestblocks <Token>\n\n");
        break;
    case '--v':
        console.log('Terragreen-CLI @ 1.0.0');
        break;
    default: console.log('Invalid Option');
}
//console.log("main ts welcome user:",User)
//console.log(`main ts =  welcome user: ${User}`)
