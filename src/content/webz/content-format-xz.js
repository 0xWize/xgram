//format
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

import WebbIcon from '../webx/webb-icon';
import NavsHeaderWebb from './navs-header-webb';
import UserWebb from '../webx/user-webb';


const { Header, Content, Footer } = Layout;



export default function ContentFormatXZ (props) {

  return (
    <>
      {/* header */}
      <Header 
        className='back-color-wite mx-0 px-2 height-xl border-bottom' 
        style={{position:'sticky', top:0, zIndex:99}}
      >
        <div className={'mx-0'}>
          <Row>
            <Col xs={0} md={6} lg={4}></Col>
            <Col xs={24} md={24} lg={16}>

            <Row justify="space-between">
          <Col span={3} >
            <Link to={props.link}> <WebbIcon /> </Link>
          </Col>

          <Col xs={0} md={18} className="text-center">
            <NavsHeaderWebb />
            
          </Col>
          <Col xs={18} md={0} className="text-center">
            <p className='text-lead text-color-tone'>{props.head}</p>
          </Col>

          <Col span={3} className="text-end" >
            <UserWebb />
          </Col>
        </Row>

            </Col>
            <Col xs={0} md={6} lg={4}></Col>
          </Row>

        </div>

      </Header>
      
      {/* content */}
      <Layout>
        <Content style={{ minHeight:'100vh' }}>
          <div className={''}>
            <Row>
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={24} md={24} lg={24}>{props.avtr}</Col>
              <Col xs={0} md={0} lg={0}></Col>
            </Row>
          </div>

          <div className={props.form ==='full' ? '' : 'd-none'}>
            <Row>
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={24} md={24} lg={24}>{props.data}</Col>
              <Col xs={0} md={0} lg={0}></Col>
            </Row>
          </div>

          <div className={props.form ==='wide' ? 'mx-3' : 'd-none'}>
            <Row>
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={24} md={24} lg={24}>{props.data}</Col>
              <Col xs={0} md={0} lg={0}></Col>
            </Row>
          </div>

          <div className={props.form ==='medium' ? 'mx-3' : 'd-none'}>
            <Row>
              <Col xs={0} md={6} lg={4}></Col>
              <Col xs={24} md={24} lg={16}>{props.data}</Col>
              <Col xs={0} md={6} lg={4}></Col>
            </Row>
          </div>

          <div className={props.form ==='small' ? 'mx-3' : 'd-none'}>
            <Row>
              <Col xs={0} md={6} lg={7}></Col>
              <Col xs={24} md={9} lg={10}>{props.data}</Col>
              <Col xs={0} md={6} lg={7}></Col>
            </Row>
          </div>

          <div className={props.form ==='mini' ? 'mx-3' : 'd-none'}>
            <Row>
              <Col xs={0} md={6} lg={9}></Col>
              <Col xs={24} md={12} lg={6}>{props.data}</Col>
              <Col xs={0} md={6} lg={9}></Col>
            </Row>
          </div>


        </Content>
      </Layout>

      {/* footer */}
      <Footer style={{ textAlign: 'center' }}>{}</Footer>
    </>
    )
  }