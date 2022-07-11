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
  