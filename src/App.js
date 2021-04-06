import React from 'react'
import {Grid,Container} from '@material-ui/core'

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
        >
          <Profile />
        </Grid>
        <Grid
          item
          xs
          style={{backgroundColor: "green"}}
        >
          <Header />
          <Router>
            <Switch>
              <Route path="/" exact component={Resume} />
              <Route path="/portfolio" exact component={Portfolio} />
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
