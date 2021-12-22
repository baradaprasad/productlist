import React from 'react'
import { useMemo } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Dashboard from './Page/dashboard';
import Login from './Page/login';
import Signup from './Page/signup';


function PrivateRoute({ component:Comp, ...rest }) {
    const isLogin=useMemo(()=>{
    const strUser=localStorage.getItem('product');
    console.log("Nothing",strUser)
        let user={}
        if(strUser){
            user=JSON.parse(strUser)
        }
        if(user.email&&user.password){
            return true
        }
        return false
    },[])
    console.log('isLogin',isLogin)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin ? (
            <Comp />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default function Main() {
    return (
        <div>
          <Router>
              <Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/signup" component={Signup} ></Route>
                  <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
                  {/* <Route path="/" ></Route>
                  <Route path="/" ></Route>
                  <Route path="/" ></Route> */}
              </Switch>
        </Router>  
        </div>
    )
}
