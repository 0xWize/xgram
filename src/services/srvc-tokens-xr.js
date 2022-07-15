//init
import axios from 'axios'

const xrpl = require('xrpl')
const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
// const wallet = xrpl.Wallet.fromSeed('ssJ5SCYKd81VjVXnvGRLjjaoqHMU1')
const secret = 'ssJ5SCYKd81VjVXnvGRLjjaoqHMU1';
const tokenlink = "ipfs://QmQjDvDhfHcMyUgDAxKig4AoMTtS5JrsfpiEEpFa3F9QRt"

// ------------------------ //
export const XTokenMint = async (item) => {

  const wallet = xrpl.Wallet.fromSeed(secret)
	const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
	await client.connect()

	console.log("Connected to Sandbox")
  console.log(wallet.classicAddress)

	const transactionBlob = {
		TransactionType: "NFTokenMint",
		Account: wallet.classicAddress,
		URI: xrpl.convertStringToHex(item.tokenlink),
		Flags: parseInt(1),
		NFTokenTaxon: 0 //Required, but if you have no use for it, set to zero.
	}
  
  const tx = await client.submitAndWait(transactionBlob,{wallet})
	const nfts = await client.request({
		method: "account_nfts",
		account: wallet.classicAddress
	})
	console.log(nfts)

	console.log("Transaction result:", tx.result.meta.TransactionResult)
	console.log("Balance changes:",
	  JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2))
	client.disconnect()

}

export const XGetUserTokens = async (item) => {
  
	// const wallet = xrpl.Wallet.fromSeed(item.scrt)
	await client.connect()

	console.log("Connected to Sandbox: Get User Tokens")
	const result = await client.request({
		method: "account_nfts",
		// account: wallet.classicAddress
    account: item.acnt
	})
	console.log(result)
	
  client.disconnect()

  var docx = result.result.account_nfts

  for (let x=0; x<docx.length; x++) {

    var urlx = xrpl.convertHexToString(docx[x].URI)
    var urlz = 'https://ipfs.io/ipfs/' + urlx.toString().substring(7)

    var metadata = await axios.get(urlz) 
    // const json = await metadata.json();
    console.log(metadata.data)
    docx[x] = {...docx[x], ...metadata.data}
  }

  return docx
}


export const XTokenTransfer = async (item) => {
  await client.connect()
  console.log("Connected to Sandbox: Transfer")
  
  const wallet = xrpl.Wallet.fromSeed(item.scrt)
  console.log(wallet.classicAddress)

}

export const XGetClassicAddress = async (item) => {
  const wallet = xrpl.Wallet.fromSeed(item)
  return(wallet.classicAddress)
}