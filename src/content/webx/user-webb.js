// user avatar
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Drawer, Card } from 'antd';

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

export default function UserWebb(props) {
  
  return (
    <>
      <div className="py-1" >
        <Link to={'/auth/wallet'}>
        <Jazzicon diameter={30} seed={jsNumberForAddress(Date.now().toString())} />    
        </Link>
        
      </div>
  
    </>
    )
  }