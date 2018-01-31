/**
 * Created by zhuyue on 18/1/16.
 */
import React, { Component } from 'react'
import AppRouter from '../router'
import {Link, HashRouter as Router, withRouter, Switch, Route} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Alert, Button } from 'antd'
import '../style/style.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {signOut} from '../store/action/user'
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/notification': '控制台',
  '/shop': '商铺管理',
  '/check': '财务管理'
};
class Home extends Component {
  signOut () {
    this.props.signOut()
    console.log('signOut')
  }

  render() {
    const { location } = this.props
    console.log(this.props, 'props')
    console.log(location, 'location11111')
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {breadcrumbNameMap[url]}
          </Link>
        </Breadcrumb.Item>
      )
    })
    const breadcrumbItems = [(
      <Breadcrumb.Item key="home">
        <Link to="/">有个铺子商户端</Link>
      </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems)
    return (
     
      <Layout className="layout Home">
        <Sider width={288} className="sider">
          <Header className="header"><i className="iconfont icon-shangpuguanli" /><span>有个铺子商户端</span></Header>
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <Menu.Item key="2"><i className="iconfont icon-shangpuguanli" /><span>控制台</span><Link to="/notification"></Link></Menu.Item>
            <Menu.Item key="3"><i className="iconfont icon-shangpuguanli" /><span>商铺管理</span><Link to="/shop"></Link></Menu.Item>
            <SubMenu key="sub3" title={<span><i className="iconfont icon-shangpuguanli" /><span>财务管理</span></span>}>
              <Menu.Item key="4"><Link to="/check">账单管理</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="layoutSmall">
          <Header className="header">
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumbItems}
            </Breadcrumb>
            <Button className="signOut" onClick={() => this.signOut()}>退出</Button>

          </Header>
          <Content className="content" style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <AppRouter/>
          </Content>
        </Layout>
      </Layout>

    );
  }
}
// export default withRouter(Home)
export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
    signOut
  }, dispatch)
)(withRouter(Home))
