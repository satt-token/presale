const web3 = new Web3(window.ethereum);
let addr;
const sttaddr = "0x5C73f25104BE151aFdeDADE94932Ded914F1ebaF",
    sttabi = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Approval",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Transfer",
        type: "event"
    }, {
        stateMutability: "nonpayable",
        type: "fallback"
    }, {
        inputs: [{
            internalType: "address",
            name: "_refer",
            type: "address"
        }],
        name: "airdrop",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "payable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner_",
            type: "address"
        }, {
            internalType: "address",
            name: "spender",
            type: "address"
        }],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "num",
            type: "uint256"
        }],
        name: "authNum",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "_refer",
            type: "address"
        }],
        name: "buy",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "payable",
        type: "function"
    }, {
        inputs: [],
        name: "cap",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "clearETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getBlock",
        outputs: [{
            internalType: "bool",
            name: "swAirdorp",
            type: "bool"
        }, {
            internalType: "bool",
            name: "swSale",
            type: "bool"
        }, {
            internalType: "uint256",
            name: "sPrice",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "sMaxBlock",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "nowBlock",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "airdropEth",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint8",
            name: "tag",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "set",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "ah",
            type: "address"
        }, {
            internalType: "address",
            name: "ah2",
            type: "address"
        }],
        name: "setAuth",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "sender",
            type: "address"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        stateMutability: "payable",
        type: "receive"
    }];
let sttcontract = new web3.eth.Contract(sttabi, sttaddr);
const ethEnabled = async () => {
    try {
        if (window.ethereum) {
            const e = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            return addr = e[0]
        }
    } catch (e) {
        console.error(e)
    }
}, accChanged = async () => {
    try {
        window.ethereum.on("accountsChanged", function(e) {
            0 == e.length && (window.location.href = window.location.href)
        })
    } catch (e) {
        console.error(e)
    }
}, getAirdrop = async () => {
    await ethEnabled(), null == addr && alert("No BEP20 wallet detected or it was not allowed to connect. Refresh and try again.");
    let e = document.getElementById("refferal").value;
    sttcontract.methods.airdrop(e).send({
        from: addr,
        value: web3.utils.toWei("0.002", "ether")
    }, (e, t) => {
        e ? console.log(e) : console.log(t)
    })
}, buystt = async () => {
    await ethEnabled(), null == addr && alert("No BEP20 wallet detected or it was not allowed to connect.");
    let e = document.getElementById("token").value;
    e = 1e18 * Number(e);
    let t = document.getElementById("refferal").value;
    sttcontract.methods.buy(t).send({
        from: addr,
        value: e,
        gasPrice: 1300000
    }, (e, t) => {
        e ? console.log(e) : console.log(t)
    })
};