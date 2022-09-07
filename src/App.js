import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/Routes";
// import { Fragment } from "react";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {
            let DefaultLayout = Layout;
            const Page = route.component;
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
