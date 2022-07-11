// user avatar
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Drawer, Card } from 'antd';

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

export default function UserWebb(props) {
  
  return (
    <>
      <div className="py-1" >
      <Jazzicon diameter={30} seed={jsNumberForAddress(Date.now().toString())} />    
      </div>
  
    </>
    )
  }