import React from 'react'
import { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './Page/dashboard';
import Login from './Page/login';
import Signup from './Page/signup';


function PrivateRoute({ component: Comp, ...rest }) {
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])
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

function PublicRoute({ component: Comp, ...rest }) {
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isLogin ? (
          <Comp />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const HomeRoute =()=>{
  const isLogin = useMemo(() => {
    const strUser = localStorage.getItem('product');
    let user = {}
    if (strUser) {
      user = JSON.parse(strUser)
    }
    if (user.email && user.password) {
      return true
    }
    return false
  }, [])

  return <Redirect to={isLogin?"/dashboard":"/login"} /> 

}


export default function Main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeRoute }/>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <Route path="/" ></Route>
                  <Route path="/" ></Route>
                  <Route path="/" ></Route> */}
        </Switch>
      </Router>
    </div>
  )
}
