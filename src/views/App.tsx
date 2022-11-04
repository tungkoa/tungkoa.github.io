import React, { useContext, useEffect, useState } from "react";
import globalStyles from "../style.module.scss"
import { StoreContext } from "./components/StoreProvider";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from './pages/note/Notes';
import Create from './pages/note/Create';
import Layout from './components/Layout';
import { Backdrop, TextField } from '@mui/material';
import Interview from './pages/interview/Interview';
import Home from './pages/home/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa"
    },
    secondary: purple
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App(props) {
  const [isLoading, setIsLoading] = useContext(StoreContext).isLoading;
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  useEffect(() => {
  }, []);

  function handleOnChangePassword(e) {
    setPassword(e.target.value);
    if(e.target.value === ',') {
      setIsOpen(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/interview'>
          <Interview/>
        </Route>
        <Route path="/note">
          <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={isOpen}
            // onClick={handleClose}
          >
            <TextField
              autoFocus={true}
              id="outlined-password-input"
              type="password"
              autoComplete="current-password"
              onChange={handleOnChangePassword}
            />
            {/*<CircularProgress color="inherit" />*/}
          </Backdrop>
          {!isOpen && <Layout>
            <Switch>
              <Route exact path="/note">
                <Notes/>
              </Route>
              <Route path="/note/create">
                <Create/>
              </Route>
            </Switch>
          </Layout>}
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
