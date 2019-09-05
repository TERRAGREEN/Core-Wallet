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
    case 'walletinit':
        User.WalletInitialize(argc[1], argc[2]);
        break;
    case 'createwallet':
        User.createWallet(argc[1], argc[2]);
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
        console.log("\n Terragreen CLI \n version: 1.0.0 \n\n\nWallet CREATE :\t\tCreate Wallet Account \n\n\t\t\tUsage: terragreen createWallet <WalletName> <WalletPassword> \n\nWallet INITIALIZE :\tCreate Wallet Account \n\n\t\t\tUsage: terragreen walletinit <WalletName> <WalletPassword> \n\nToken :\t\t\tGet new access-token from your refresh-token to access all authorized apis. \n\n\t\t\tUsage: terragreen refreshtoken <Token> \n\nWallet Balance :\tGet wallet balance. \n\n\t\t\tUsage: terragreen getbalance <Token> \n\nGet All Rates :\t\tTo Get Rate of TGN coin \n\n\t\t\tUsage: terragreen getallrates \n\nGet Rate :\t\tGet TGCoin's current rates. \n\n\t\t\tUsage: terragreen getrate \n\nGet New Address :\tGet new receive address. \n\n\t\t\tUsage: terragreen getnewaddress <Token> \n\nTransaction Send :\tSend amount to other user's wallet. \n\n\t\t\tUsage: terragreen send <Token> <SendAddress> <Amount>\n\nGet Transaction List :\tGet transaction list of the user. \n\n\t\t\tUsage: terragreen gettransactionlist <Token> \n\nVerify Payment Status :\tVerify transaction's payment status. \n\n\t\t\tUsage: terragreen verifyPaymentstatus <Token> <ReceiveAddress> \n\nGet Transaction Detail: get transaction's detail of given TransactionHash. \n\n\t\t\tUsage: terragreen gettransactiondetail <Token> <TransactionHash> \n\nGet Blocks :\t\tGet Blocklist. \n\n\t\t\tUsage: terragreen getblocks \n\nGet Blocks Details :\tGet block details. \n\n\t\t\tUsage: terragreen getblockdetails <Token> <BlockId>\n\nGet Latest Blocks :\tGets latest block list. \n\n\t\t\tUsage: terragreen getlatestblocks <Token>\n\n");
        break;
    case '--v':
        console.log('Terragreen-CLI @ 1.0.0');
        break;
    default: console.log('Invalid Option');
}
//console.log("main ts welcome user:",User)
//console.log(`main ts =  welcome user: ${User}`)
