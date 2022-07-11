// user
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Card } from 'antd';

import WebbDividerMedium from "../webx/webb-divider-md";
import WebbSpinner from "../webx/webb-spinner";

// import { GetUserCredentialsList } from "../../services/srvc-users-realm";

const tokenlist = require('../../data/data-tokens-list.json')
const { Meta } = Card;

export default function MainViewTokensModule() {
  
  const {id} = useParams();
  const asset = {usid: 'ww'}
  console.log (tokenlist.data)
  const [loading, setLoading] = useState(false)

  const [sort, setSort] = useState([])
  const [data, setData] = useState(tokenlist.data)

  // useEffect( () => {
  //   if (id){
  //     const fetchData = async() => {

  //       // const result = await GetUserCredentialsList({
  //       //   data: {user: id},
  //       //   user: asset.usid
  //       // })
  //       // console.log (result)
  //       setData(tokenlist.data)

  //       // var srtx = [...new Set(tokenlist.data.map(item=>item.wize.substring(0,2)))]
  //       // srtx = Array.from(srtx,item => 
  //       //   tokenlist.find(x => x.nmbr.substring(0,2) === item)  
  //       // )
  //       // // console.log(srtx)

  //       // setSort(srtx);
  //       setLoading(false)

  //     }
  //     fetchData()
  //   } else {}
  // },[]);


  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <div className="text-center">
        <p className="lead text-center text-color-main" style={{fontSize:'2rem'}}>
          <i className="caption-md bx bx-grid-alt"></i>
        </p>
        <p className="lead text-color-dark">Loading Your NFT Collection</p>
        <WebbSpinner />
      </div>

    </>
  );

  if (data.length===0) return ( 
    <>
      <WebbDividerMedium />
        <p className="text-center text-color-main" style={{fontSize:'2rem'}}>
          <i className="caption-md bx bx-diamond"></i>
        </p>
      <p className="lead text-center text-color-next">
        Unable to locate WIZE Tokens for this account. 
      </p>
      <p className="lead text-center text-white d-none">
        Please request from your Organizers / DAOs / Business
      </p>
    </>
  );

  return (
    <>
      <WebbDividerMedium />
      <div className="">
        <Row className="m-0 p-0" gutter={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
          {data && data.map((item, i) => (
            <Col className="mb-1" xs={{span:12}} sm={{span:8}} md={{span:8}} key={i}>
            
              <Link to={`/media/v/${item.enid}`}>
                <Card
                  hoverable
                  cover={
                    <div className="media-square">
                      <img className="" src={item.file.link} alt={item.name}></img>
                    </div>
                  }
                >
                  <Meta className="" title={item.meta.name} description={item.wize} />
                </Card>
              </Link>
              
            </Col>
          ))}
        </Row>
      </div>

      
      <WebbDividerMedium />

    </>
  );

}