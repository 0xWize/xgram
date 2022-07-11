// webb header links
import { Link } from "react-router-dom";
import { Space, Typography, Divider } from 'antd';

import { UserForm } from "../../services/srvc-utilities";
// import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ActiveSiteLink } from '../../services/srvc-utilities';

const { Text } = Typography;
const list = (require("../../data/navs-header-webb.json")).data;

export default function NavsHeaderWebb() {

  const data = list //.filter(item => item.actv );
  
  return (
  <>
    <div className="">
      <Space className="" >
        {data && data.map((item, i) => ( item.actv ?
        
          <Link to={`/${item.link}`} key={i}>
            {item.link === ActiveSiteLink() 
              ? <Text className='text-color-main p-1'>{item.name}</Text>
              : <Text className='text-color-tone p-1 hilite rounded-md'>{item.name}</Text>
            }
          </Link>
          
        
        :''))}
      </Space>
    </div>
  </>
  )
}