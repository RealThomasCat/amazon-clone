import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51LpAMaSFJI7Uhs5aUSxBBBXbTx3AdGNVSNSljC6eGJiifxH3OOVpLdO3CXjfzHRaCn23bRbDDKqZjP4DTqlSVufi00VGSaAoO6'
);

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //only run once when component is loaded

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser) {
        //the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is not logged in

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
