import React, { Component } from 'react'
import { adminRoute } from './routes'
import { Route, Switch, Redirect } from 'react-router-dom';
import {Frame} from './components'

class App extends Component {
    render() {
        return (
            <div>
                <Frame>
                    <Switch>
                        {adminRoute.map(route => {
                            if(route.children && route.children.length){
                               return route.children.map(childRoute =>{
                                   return <Route
                                        key={childRoute.path}
                                        exact={childRoute.exact}
                                        path={childRoute.path}
                                            render={(childRouteProps) => {
                                                return  <route.component {...childRouteProps}></route.component>
                                            }}
                                        />
                                })
                            }else{
                                return <Route
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                    render={(routerProps) => {
                                        return  <route.component {...routerProps}></route.component>
                                    }}
                                />
                            }
                            
                        })}
                        <Redirect from="/admin" exact to={adminRoute[0].path}></Redirect>
                        <Redirect to="/404"></Redirect>
                    </Switch>
                </Frame>
            </div>
        )
    }
}
  
export default App