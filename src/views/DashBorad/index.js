import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.less';
import logo from './logo.png';
import {adminRoute} from "./../../routes";
import {Link} from "react-router-dom"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class index extends Component {
    state = {
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1']
    }

    createRoute = (routes) => {
        return  routes.map(route =>{
            if(route.isNav) {
                return <Menu.Item key={route.path}>
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
                            defaultSelectedKeys={this.state.defaultSelectedKeys}
                            defaultOpenKeys={this.state.defaultOpenKeys}
                            style={{ height: '100%', borderRight: 0 }}> 
                            {this.createRoute(adminRoute)}
                        </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}>
                                    {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
