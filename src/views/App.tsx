import React, { useContext, useEffect, useState } from "react";
import globalStyles from "../style.module.scss"
import { StoreContext } from "./components/StoreProvider";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from './pages/Notes';
import Create from './pages/Create';
import Layout from './components/Layout';
const theme = createMuiTheme({
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
  const [trialMindBodyFormData, setTrialMindBodyFormData] = useContext(StoreContext).trialMindBodyFormData;
  const [isLoading, setIsLoading] = useContext(StoreContext).isLoading;
  const [studioData, setStudioData] = useContext(StoreContext).studioData;
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
