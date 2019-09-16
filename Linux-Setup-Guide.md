
# Building and running the CLI interface on Linux

## Install NodeJS

```sh
$ sudo apt-get update
$ sudo apt-get install nodejs
```

## Getting Started

Clone this repository locally:

``` sh
$ git clone https://github.com/TERRAGREEN/Source-Code.git
```

Navigate to the Source-Code-master folder in a terminal:
``` sh
cd ./Source-Code-master
```

## Install dependencies with npm:

From within the Source-Code-master directory run:

``` sh
$ sudo apt-get install npm
```

## Build

``` sh
$ export terragreen="$PATH:$HOME/./bin/main.js"
```


## Execute

After linking, user can use terragreen as local varible to run in any folder via cmd.

### Create Account
Let's start by creating your wallet:
> **terragreen createWallet** _{ your email ID }_  

``` sh
$ terragreen createWallet  your@email.com  
```

### Send
send the TGN via following command :
> **terragreen send** _{Token} {SendAddress} {Amount}_  

``` sh
$ terragreen send VQeoi7EADTk1Hwy_EP2I068v-k6hwTzBTbQvkoLtJrt0qQoUkepfLtNYkSegfU0NzlNO4atHrOrLD3JGtlh1rP6nEQmmFlimbPKtC16sG2fE9imUBQt8mUEN7GrEEk4aM01FUCCY12E017ZIDqd6XSIqs7aNqol0LHe8F6-zNr8fy6c-LuN4cJSywjtUWPirYCXZzRFKKwEHl3diY6d_s5TxGYEz8_VqAOrp4zWf7GlUKUbZlP8ROKYUL1t4KMsM_cNrF_Fkpi7nkhCurhMWsQdWQquQQPRreOh76bN50_ZAb-zvkJ9yuiWk3O1jdF6PoX_OpuzMZ2Ooj0074CzkpDLQd-QkpAYHmo71bCXxEm4 dac52a7303591a6924ab708c621adfad 10    
```

### Transaction Detail
you can get yout transaction details via following command :
> **terragreen gettransactiondetail** _{Token} {TransactionHash}_  

``` sh
$ terragreen gettransactiondetail VQeoi7EADTk1Hwy_EP2I068v-k6hwTzBTbQvkoLtJrt0qQoUkepfLtNYkSegfU0NzlNO4atHrOrLD3JGtlh1rP6nEQmmFlimbPKtC16sG2fE9imUBQt8mUEN7GrEEk4aM01FUCCY12E017ZIDqd6XSIqs7aNqol0LHe8F6-zNr8fy6c-LuN4cJSywjtUWPirYCXZzRFKKwEHl3diY6d_s5TxGYEz8_VqAOrp4zWf7GlUKUbZlP8ROKYUL1t4KMsM_cNrF_Fkpi7nkhCurhMWsQdWQquQQPRreOh76bN50_ZAb-zvkJ9yuiWk3O1jdF6PoX_OpuzMZ2Ooj0074CzkpDLQd-QkpAYHmo71bCXxEm4 denVExYD0qqpWA7ZeIjnhlvJGb0koLEsofUd7G4PHFZQUFNWVEdSTlROWEhBU0g0  
```


### Help
if you find any difficulty with the command's option, get help via following command :
> **terragreen --help**  

``` sh
$ terragreen --help 
```
