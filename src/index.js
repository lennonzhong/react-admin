import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoute } from './routes'
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Router>
            <Switch>


                <Route path="/admin" render={(routerProps) => {
                    return (
                        <App {...routerProps}></App>
                    )
                }}></Route>

                {mainRoute.map(route => {
                    return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                })}

                <Redirect from="/" to="/admin" exact></Redirect>
                <Redirect to='/404'></Redirect>
            </Switch>
        </Router>
    </ConfigProvider>,
    document.getElementById('root')
);