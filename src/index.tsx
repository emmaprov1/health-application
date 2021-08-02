import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Store from './Storage/Store';
import { createHashHistory } from "history";
import { ConfirmationSlip, ConfirmationSlipVerification, Dashboard, OfficerRecords, ForgotPassword, Home, Login, OfficerRecordsSingle, Register } from './Pages/Frontend/Interfaces';
import { Wrapper, WrapperFront } from './Pages';
import './index.scss'
const history = createHashHistory();

const app = (
    <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <Router history={history}>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/slip/:nin" component={ConfirmationSlip}></Route>
          <Route exact path="/slip/nin/verification" component={ConfirmationSlipVerification}></Route>
          <Route exact path="/forgot-password" component={ForgotPassword}></Route>
          <Route exact path="/">
            <WrapperFront>
              <Home/>
            </WrapperFront>
          </Route>
          <Route exact path="/dashboard">
            <Wrapper>
              <Dashboard/>
            </Wrapper>
          </Route>
          <Route exact path="/officer-records">
            <Wrapper>
              <OfficerRecords/>
            </Wrapper>
          </Route>
          <Route exact path="/officer-records/:nin">
            <Wrapper>
              <OfficerRecordsSingle/>
            </Wrapper>
          </Route>
      </Router>
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
