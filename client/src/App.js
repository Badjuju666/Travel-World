import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './pages/components/Navbar/Navbar';
import SignIn from './pages/components/Sign/in';
import SignUp from './pages/components/Sign/up';
import Delete from './pages/components/Sign/delete';
import LA from './pages/components/Cities/LA';
import SF from './pages/components/Cities/SF';
import LV from './pages/components/Cities/LV';
import All from './pages/components/Cities/All';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'graphql',
});

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    setToken(token);
  }, [token]);

  console.log(token)

  return(
    <ApolloProvider client={client}>
      <AuthContext.Provider
        value={{
          isAdmin,
          token,
          setToken,
          setIsAdmin
        }}
      >
        <Router>
          <StoreProvider>
          <Navigation />
          <Switch>
            <Route exact path="/" component={All} />
            <Route exact path="/Navbar" component={Navbar} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/delete" component={Delete} />
            <Route exact path="/LA" component={LA} />
            <Route exact path="/SF" component={SF} />
            <Route exact path="/LV" component={LV} />
          </Switch>
          </StoreProvider>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  )
}

export default App;
