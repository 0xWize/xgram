// user
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import { Row, Col, Button } from "antd";


const list = require('../../data/data-user-head.json').data

export default function UserViewHeadModule() {
  
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
      <Row>
        <Col xs={0} md={24} lg={24}>
        <div className="media-head-md">
          <img src={list[0].wall} className="banner" alt={'...'}></img>
          <div className="avatar">
            {/* <Jazzicon diameter={60} seed={jsNumberForAddress('BackStage Mumbai')}/> */}
          </div>
          
          {/* <h1 className="name caption-md">{'BackStage Mumbai'}</h1> */}
          {/* <p className="account text-lead fw-bold "></p> */}
          <Button type="primary" size="large" className="btn rounded-xx"
            style={{width:'9rem'}}
          >
            Follow
          </Button>
        </div>
        </Col>

        <Col xs={24} md={0} lg={0}>
        <div className="media-head-sm">
          <img src={list[0].wall} className="banner" alt={'...'}></img>
          <div className="avatar">
            {/* <Jazzicon diameter={50} seed={jsNumberForAddress(Date.now().toString())}/> */}
          </div>
          
          {/* <h1 className="name caption-md fw-bold" >{'BackStage Mumbai'}</h1> */}
          {/* <p className="account fw-bold">{''}</p> */}
          <Button type="primary" size="large" className="btn rounded-xx"
            style={{width:'6rem'}}
          >
            Follow
          </Button>
        </div>
        </Col>

      </Row>

      
    </>
  );

}