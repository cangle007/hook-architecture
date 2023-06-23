import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./redux/setupStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePageContainer from "./Containers/HomePageContainer";
import Loader from "../src/components/Loader/Loader";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const store = setupStore(); // Initialize the store

const App = (props) => {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <Router history={history}>
            <Routes>
              <Route exact path="/" element={<HomePageContainer />} />
            </Routes>
          </Router>
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;
