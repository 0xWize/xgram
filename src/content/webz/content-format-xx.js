//format
import { Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import WebbIcon from '../webx/webb-icon';

const { Header, Content, Footer } = Layout;

export default function ContentFormatXX (props) {

  return (
    <>
      {/* header */}
      <Header 
        className='back-color-wite px-2 height-xl' 
        style={{position:'sticky', top:0, zIndex:99}}
      >
        <Row justify="space-between">
          <Col span={3} >
            <Link to={props.link}> <WebbIcon /> </Link>
          </Col>

          <Col span={18} className="text-center">
            <Row align='middle' justify='center'>
              <p className='text-lead text-color-main m-0'>{props.head}</p>
            </Row>
          </Col>

          <Col span={3} className="text-end py-1" >
            <Link to={props.link}>
              <i className="bx bx-x text-color-tint m-0 text-icon-md" ></i>
            </Link>
            
          </Col>
        </Row>
      </Header>
      
      {/* content */}
      <Layout>
        <Content style={{ minHeight:'100vh' }}>
          <div className={props.form ==='full' ? '' : 'd-none'}>
            <Row>
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={24} md={24} lg={24}>{props.data}</Col>
              <Col xs={0} md={0} lg={0}></Col>
            </Row>
          </div>

          <div className={props.form ==='wide' ? 'mx-2' : 'd-none'}>
            <Row>
              <Col xs={0} md={0} lg={0}></Col>
              <Col xs={24} md={24} lg={24}>{props.data}</Col>
              <Col xs={0} md={0} lg={0}></Col>
            </Row>
          </div>

          <div className={props.form ==='medium' ? 'mx-2' : 'd-none'}>
            <Row>
              <Col xs={0} md={6} lg={4}></Col>
              <Col xs={24} md={12} lg={16}>{props.data}</Col>
              <Col xs={0} md={6} lg={4}></Col>
            </Row>
          </div>

          <div className={props.form ==='small' ? 'mx-2' : 'd-none'}>
            <Row>
              <Col xs={0} md={7} lg={8}></Col>
              <Col xs={24} md={10} lg={8}>{props.data}</Col>
              <Col xs={0} md={7} lg={8}></Col>
            </Row>
          </div>

          <div className={props.form ==='mini' ? 'mx-2' : 'd-none'}>
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