import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './frame.less';
import logo from './logo.png';
import {adminRoute} from "./../../routes";
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


@withRouter
class Frame extends Component {
    createRoute = (routes) => {
        return  routes.map(route =>{
            if(route.isNav) {
                return route.hide ? null : <Menu.Item key={route.path}>
                        <Link to={route.path}>
                            <Icon type={route.icon} />{route.title}
                        </Link> 
                </Menu.Item>
            }else {
                return (
                    <SubMenu
                        key={route.path}
                        title={
                            <span>
                                <Icon type={route.icon} />{route.title}
                            </span>
                        }>
                        {route.children && route.children.length ? this.createRoute(route.children) : '' }
                    </SubMenu>
                )
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Layout className="dashborad-layout">
                    <Header className="header">
                        <div className="logo">
                            <img src={logo} alt="seo优化"></img>
                        </div>
                    </Header>
                    <Layout className="aside-layout">
                        <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            theme="dark" 
                            mode="inline"
                            selectedKeys={this.props.location.pathname}
                            style={{ height: '100%', borderRight: 0 }}> 
                            {this.createRoute(adminRoute)}
                        </Menu>
                        </Sider>
                        <Layout style={{ padding: '16px' }}>
                            <Content style={{
                                    background: '#fff',
                                }}>
                                    {console.log(this.props)}
                                    {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Frame