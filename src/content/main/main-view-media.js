// user
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Card, Button } from 'antd';

import WebbDividerMedium from "../webx/webb-divider-md";
import WebbSpinner from "../webx/webb-spinner";

import { GetSalesCode } from "../../services/srvc-auth-xrpl";
// import { GetUserCredentialsList } from "../../services/srvc-users-realm";

const tokenlist = require('../../data/data-tokens-list.json')
const { Meta } = Card;

export default function MainViewMediaModule() {
  
  const {id} = useParams();
  const asset = {usid: 'ww'}
  console.log (tokenlist.data)
  const [loading, setLoading] = useState(false)

  const [sort, setSort] = useState([])
  const [data, setData] = useState(tokenlist.data.find(item => item.enid === id))


  const [sale, setSale] = useState(false);
  const [code, setCode] = useState("")

  const MediaSale = async () => {
    setSale(true);

    const result = await GetSalesCode({rate: data.rate})
    console.log (result)
    setCode(result.data.code);
  }


  if (loading) return ( <></> );

  return (
    <>
      <WebbDividerMedium />
      <div className="p-1 back-color-wite">
        <div className="media-square">
          <img className="" src={data.file.link} alt={data.name}></img>
        </div>
      </div>

      <div className="p-2 back-color-wite">
        <p className="m-0">Name: {data.meta.name}</p>
        <p>Memo: {data.meta.memo}</p>
        
        <p className="m-0">NFT: {data.wize}</p>
        <p>IPFS: {'cid'}</p>
        
        <p>Created: {data.date.stts}</p>

      </div>
      
      <WebbDividerMedium />
      <div className="p-2 back-color-wite">
        <p className="text-bold text-lead">Price: {data.rate}</p>
        <Button className="px-3" onClick={()=>MediaSale()}>Buy</Button>
        <WebbDividerMedium />

        <div className={`${sale ? '' : 'd-none'}`}>
          <p className="text-bold">Scan to Buy via XUMM </p>
          <img src={code}></img>
        </div>

      </div>
      
    </>
  );

}