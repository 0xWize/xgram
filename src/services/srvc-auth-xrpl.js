//auth XRPL
const axios = require('axios')

export const GetAuthCode = async () => {
  
  const base = `${process.env.REACT_APP_XUMM_BASE_URL}//api/v1/xrpl/trxn/auth`;
  const datx = {
    webook: ""
  }

  let result = (await axios.post(base, datx, {headers:{}})).data
  console.log (result.data)
  return {data: {
    code: result.data.refs.qr_png,
    uuid: result.data.uuid,
    date: Date.now()
  }}

}
  

export const GetSalesCode = async (item) => {
  
  // snozKbKs2AvDRrAbGh7QjfwMgpGWg

  const base = `${process.env.REACT_APP_XUMM_BASE_URL}//api/v1/xrpl/trxn/auth`;
  const datx = {
    "to": "rhGaHkiPCvzFsYUVYCPfy5s5wE6AqEAGzd",
    "amount": item.rate,
    "userToken": "da52691b-d8d7-4c41-a5b6-5f012223674c"
  }

  let result = (await axios.post(base, datx, {headers:{}})).data
  console.log (result.data)
  return {data: {
    code: result.data.refs.qr_png,
    uuid: result.data.uuid,
    date: Date.now()
  }}

}