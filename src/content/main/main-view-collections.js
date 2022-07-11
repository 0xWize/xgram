// user
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import WebbDividerMedium from "../webb/webb-divider-md";
import WebbSpinner from "../webb/webb-spinner-sm";
import avtx from '../../media/user.png'

import { GetUserCredentialsList } from "../../services/srvc-users-realm";

const formatslist = require('../../data/data-formats-main.json').data

export default function MainViewCollectionsModule() {
  
  const {id} = useParams();
  const asset = {usid: 'ww'}

  const [loading, setLoading] = useState(true)

  const [sort, setSort] = useState([])
  const [data, setData] = useState([])

  useEffect( () => {
    if (id){
      const fetchData = async() => {

        const result = await GetUserCredentialsList({
          data: {user: id},
          user: asset.usid
        })
        console.log (result)
        setData(result.data)

        var srtx = [...new Set(result.data.map(item=>item.wize.substring(0,2)))]
        srtx = Array.from(srtx,item => 
          formatslist.find(x => x.nmbr.substring(0,2) === item)  
        )
        // console.log(srtx)

        setSort(srtx);
        setLoading(false)

      }
      fetchData()
    } else {}
  },[id]);


  if (loading) return ( 
    <>
      <WebbDividerMedium />
      <div className="text-center">
        <p className="lead text-center text-color-main" style={{fontSize:'2rem'}}>
          <i className="caption-md bx bx-grid-alt"></i>
        </p>
        <p className="lead text-color-dark">Loading Your WIZE NFT Collection</p>
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
      <div className="text-center">
        <p className="text-center text-white" style={{fontSize:'2rem'}}>
          <i className="caption-md bx bx-diamond"></i>
        </p>
        <p className="caption-md text-warning">Your WIZE NFT Collection</p>
      </div>

      <WebbDividerMedium />
      <div className="container">

      <div className={``}>
      {sort && sort.map((srtx, x) => (
        <div key={x}>
          <p className="lead text-white">{srtx.form.toUpperCase()} NFT Tokens</p>

          <div className="row row-cols-2 row-cols-md-4">
          {data && data.length>0 && data.map((item, i) => ( item.wize.substring(0,2) === srtx.nmbr.substring(0,2) ?
            <div className="col mb-3" key={i}>
            
              <a href={`/c/${item.wize}`} target={'_blank'} >
                <div className="media-square shadow">
                  <img src={item.link} className="img-fluid p-1 bg-white" alt='...'></img>
                </div>
              </a>
              <div className="pt-3 text-center mb-3">
                <h1 className="fw-bold text-primary m-0 d-none">{item.wize}</h1>
                <p className="m-0 text-truncate small text-color-lite">ID: {item.wize}</p>
                
              </div>
            </div>
          :''))}    
          </div>
          <hr></hr>

          <WebbDividerMedium />
        </div>
      ))}
      </div>

      </div>

      <WebbDividerMedium />
      <WebbDividerMedium />

    </>
  );

}