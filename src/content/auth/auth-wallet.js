// auth
import { useEffect, useState } from "react";

import WebbSpinner from "../webb/webb-spinner-sm";


export default function AuthWallet() { 

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState()

  useEffect( () => {
    if (id){
      const fetchData = async() => {


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





    
}