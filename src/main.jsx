import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import Store, { persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={Store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import Store, { persistor } from './Redux/Store';

// import { PersistGate } from 'redux-persist/lib/integration/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <PersistGate persistor={persistor}>
//       <Provider store={Store}>
//         <App />
//       </Provider>
//     </PersistGate>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
