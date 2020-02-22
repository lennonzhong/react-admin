import React, { Component } from 'react'
import { adminRoute } from './routes'
import { Route, Switch, Redirect } from 'react-router-dom';
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
                                return <route.component {...routerProps}></route.component>
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