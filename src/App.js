import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe }  from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IobPLEmFOAJHcvvLP2sYUsRxRGC5OyvE8wTEMYmkenrjxWn0R9HfiaHe3Lbns0euycoeh8kujwQ3H6YVbvaBJyM00Hk291EqZ');

function App() {
  const [{}, dispatch] = useStateValue();
//only runs once when the app loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>  {
      console.log('THE USER IS >>>', authUser);

    if (authUser) {
      //the user just logged in/ the user was logged initialState
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
     }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
