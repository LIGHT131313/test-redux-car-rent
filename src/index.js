import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    beige: 'beige',
    white: '#fff',
    red: 'red',
    green: '#a3d0c3',
    grey: 'grey',
  },
  borRad: '4px 4px 4px 4px',
  boxSh: {
    one: '0px 1px 6px rgba(46, 47, 66, 0.08)',
    two: '0px 1px 1px rgba(46, 47, 66, 0.16)',
    three: '0px 2px 1px rgba(46, 47, 66, 0.08)',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <BrowserRouter basename="/"> */}
          <BrowserRouter basename="/test-redux-car-rent">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
