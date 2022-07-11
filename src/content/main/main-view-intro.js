// user
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import { Row, Col, Button } from "antd";


const list = require('../../data/data-user-head.json').data

export default function MainViewIntroModule() {
  
  const {id} = useParams();

  const [user, setUser] = useState({name:''})
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    if (id){
      const fetchData = async() => {

        // const usrx = await GetWeb3AccountInfo({ 
        //   data: { user: id },
        //   user: '',
        //   webb: process.env.REACT_APP_WEBB_SITE_NMBR
        // })
        
        // if (usrx.data)  setUser(usrx.data)
        // else setUser({name: id})
        setLoading(false)

      }
      fetchData()
    } else {}
  },[id]);
    
  return (
    <>
      <div className="p-3 back-color-wite text-center">
      
          <p className="caption-sm m-0">AdWorks MediaHouse (Mumbai)</p>
          <p className="m-0">Broadcasting & Media Production Company</p>
      
      </div>
      
    </>
  );

}