import React, { Component } from 'react'
import { adminRoute } from './routes'
import { Route, Switch, Redirect } from 'react-router-dom';
import {DashBoard} from './views';
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {adminRoute.map(route => {
                        return <Route
                            key={route.path}
                            exact={route.exact}
                            path={route.path}
                            render={(routerProps) => {
                                return (
                                    <DashBoard>
                                        <route.component {...routerProps}></route.component>
                                    </DashBoard> 
                                )
                            }}
                        />
                    })}
                    <Redirect from="/admin" exact to={adminRoute[0].path}></Redirect>
                    <Redirect to="/404"></Redirect>
                </Switch>
            </div>
        )
    }
}

export default App