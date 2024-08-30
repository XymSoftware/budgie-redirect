import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { store } from 'store';
import { theme } from 'theme';
import { App } from 'pages';
import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.css';
import './fontFaces.css';

const startApp = async () => {
  const MyApp = (
    <Provider store={store}>
      <BrowserRouter>
        <StyleSheetManager enableVendorPrefixes={true}>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
        </StyleSheetManager>
      </BrowserRouter>
    </Provider>
  );

  const target = document.querySelector('#root');
  const root = ReactDOM.createRoot(target);

  root.render(MyApp);
};

startApp();