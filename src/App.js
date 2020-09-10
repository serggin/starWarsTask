import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

//import './App.css';
import store from './store';
import AppView from './AppView';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    //secondary: green,
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppView />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
