// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/////

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePageContainer from "./Containers/HomePageContainer";
import Loader from "../src/components/Loader/Loader";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const store = setupStore();

const App = (props) => {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense>
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
