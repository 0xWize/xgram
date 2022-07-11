// auth
import { useEffect, useState } from "react";

import WebbDividerMedium from "../webx/webb-divider-md";
import WebbSpinner from "../webx/webb-spinner";

import { GetAuthCode } from "../../services/srvc-auth-xrpl";

export default function AuthWalletModule() { 

  const asset = {form: "ww"}
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState()

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        const result = await GetAuthCode();
        console.log (result);
        setData(result.data)

        setLoading(false)
      }
      fetchData()
    } else {}
  },[]);

  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <div className="text-center">
        <p className="lead text-center text-color-main" style={{fontSize:'2rem'}}>
          <i className="caption-md bx bx-user"></i>
        </p>
        <p className="lead text-color-dark">Please Wait...</p>
        <WebbSpinner />
      </div>

    </>
  );

  return (
    <>
      <div className="text-center">
        <p className="text-bold">Authenticate Scan via XUMM </p>
        <img src={data.code}></img>
      </div>
    </>
  )
    
}