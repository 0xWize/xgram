// user
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Space, Typography, Divider } from 'antd';
import { ActiveSiteLink } from '../../services/srvc-utilities';

const { Text } = Typography;

const list = require('../../data/data-social-links.json').data

export default function MainViewSocialModule() {
  
  const {id} = useParams();

  const [loading, setLoading] = useState(true)
  // const [data, setData] = useState()
  const data = list;

    
  return (
    <>
    <div className="p-2 back-color-wite text-center">
      <Space className="" >
        {data && data.map((item, i) => (
        
          <Link to={`/${item.link} text-color-tone`} key={i}>
            <i className={`text-icon-sm mx-1 ${item.icon}`}></i>
          </Link>
          
        
        ))}
      </Space>
    </div>

    </>
  );

}