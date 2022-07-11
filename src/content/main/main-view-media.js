// user
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col, Card } from 'antd';

import WebbDividerMedium from "../webx/webb-divider-md";
import WebbSpinner from "../webx/webb-spinner";

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

    </>
  );

}