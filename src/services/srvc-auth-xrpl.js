//auth XRPL
const axios = require('axios')

export const GetAuthCode = async () => {
  
  const base = `${process.env.REACT_APP_XUMM_BASE_URL}/xrpl/auth`;
  const datx = {
    webook: ""
  }

  let result = (await axios.post(base, datx, {headers:{}})).data
  console.log (result.data)
  return result

}
  

export const GetSalesCode = async (item) => {
  
  // snozKbKs2AvDRrAbGh7QjfwMgpGWg

  const base = `${process.env.REACT_APP_XUMM_BASE_URL}/xrpl/trxn/auth`;
  const datx = {data: {
    "account": "rnKuEsPjMpDu9aT318D5kzed5EfP11rSec",
    "amount": item.rate,
    "token": "da52691b-d8d7-4c41-a5b6-5f012223674c"
  }}

  let result = (await axios.post(base, datx, {headers:{}})).data
  console.log (result.data)
  return result

}