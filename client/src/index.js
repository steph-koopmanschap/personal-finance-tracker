//Load libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
//Load css
import './index.css';
//Import global state.
import store from './redux/store.js';
//Load React components
import App from './App';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';

/*
  The Main Routing file for this app  
  The "*" path will match only when no other routes do. (Redirect to 404 page not found)
  When routes are nested the UI should be nested too. Meaning the parent UI will still display
  <Route path="*" element={<NotFound />} />
  The index route will be default component/route for the "/" path.
  That means that both the App component and LandingPage component will render on the "/" path.
  The App component is the global component and will render on every path.
  Every component will render inside the <div></div> in the App component. See App.js for more info.
  The <Provider > component ensures that the entire App has access to the global state from redux. 
  The global state lives in store.js.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} > 
            <Route index element={<LandingPage />} />
            <Route path="/register" element={<Registration />}  />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
