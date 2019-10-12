
# Building and running the CLI interface on Windows

## Install NodeJS

Download and install the latest Long Term Support (LTS) version of NodeJS at: https://nodejs.org/. 

## Getting Started

Clone this repository locally:

``` bash
git clone https://github.com/TERRAGREEN/Source-Code.git
```

Navigate to the Source-Code-master folder in a terminal:
``` bash
cd ./Source-Code-master
```

## Install dependencies with npm:

From within the Source-Code-master directory run:

``` bash
npm install
```

## Build

``` bash
npm link
```


## Execute

After linking, user can use terragreen as local varible to run in any folder via cmd.

### Create Account
Let's start by creating your wallet:
> **terragreen createWallet**

``` bash
terragreen createWallet 
```
executing the above command we get

``` bash
terragreen createWallet
? WalletIdentifier: <your walletidentifier>
? Email:  <your emali>
? Password: <your password>
? Confirm password:  <confirm your password>
```


### Send
send the TGN via following command :
> **terragreen send** _{Token} {SendAddress} {Amount}_  

``` bash
terragreen send VQeoi7EADTk1Hwy_EP2I068v-k6hwTzBTbQvkoLtJrt0qQoUkepfLtNYkSegfU0NzlNO4atHrOrLD3JGtlh1rP6nEQmmFlimbPKtC16sG2fE9imUBQt8mUEN7GrEEk4aM01FUCCY12E017ZIDqd6XSIqs7aNqol0LHe8F6-zNr8fy6c-LuN4cJSywjtUWPirYCXZzRFKKwEHl3diY6d_s5TxGYEz8_VqAOrp4zWf7GlUKUbZlP8ROKYUL1t4KMsM_cNrF_Fkpi7nkhCurhMWsQdWQquQQPRreOh76bN50_ZAb-zvkJ9yuiWk3O1jdF6PoX_OpuzMZ2Ooj0074CzkpDLQd-QkpAYHmo71bCXxEm4 dac52a7303591a6924ab708c621adfad 10    
```

### Transaction Detail
you can get yout transaction details via following command :
> **terragreen gettransactiondetail** _{Token} {TransactionHash}_  

``` bash
terragreen gettransactiondetail VQeoi7EADTk1Hwy_EP2I068v-k6hwTzBTbQvkoLtJrt0qQoUkepfLtNYkSegfU0NzlNO4atHrOrLD3JGtlh1rP6nEQmmFlimbPKtC16sG2fE9imUBQt8mUEN7GrEEk4aM01FUCCY12E017ZIDqd6XSIqs7aNqol0LHe8F6-zNr8fy6c-LuN4cJSywjtUWPirYCXZzRFKKwEHl3diY6d_s5TxGYEz8_VqAOrp4zWf7GlUKUbZlP8ROKYUL1t4KMsM_cNrF_Fkpi7nkhCurhMWsQdWQquQQPRreOh76bN50_ZAb-zvkJ9yuiWk3O1jdF6PoX_OpuzMZ2Ooj0074CzkpDLQd-QkpAYHmo71bCXxEm4 denVExYD0qqpWA7ZeIjnhlvJGb0koLEsofUd7G4PHFZQUFNWVEdSTlROWEhBU0g0  
```


### Help
if you find any difficulty with the command's option, get help via following command :
> **terragreen --help**  

``` bash
terragreen --help 
```
