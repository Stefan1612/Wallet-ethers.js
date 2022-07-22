import { ethers } from "ethers";

// setting provider

window.ethersProvider = new ethers.providers.InfuraProvider("ropsten")

// setting wallet
let wallet = new ethers.Wallet(private_key)
// connect wallet to net
let walletSigner = wallet.connect(window.ethersProvider)

// or use getSigner
let signer = provider.getSigner();

// get current gas price
window.ethersProvider.getGasPrice()

const tx = {
  from: send_account,
  to: to_address,
  value: ethers.utils.parseEther(send_token_amount),
  nonce: window.ethersProvider.getTransactionCount(send_account, "latest"),
  gasLimit: ethers.utils.hexlify(gas_limit), // 100000
  gasPrice: gas_price,
  // data: "some Data",
}

// either
walletSigner.sendTransaction(tx).then((transaction) => {
  console.dir(transaction)
  alert("Send finished!")
})

// or
signer.sendTransaction(tx).then((transaction) => {
  console.dir(transaction)
  alert("Send finished!")
})
