import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./Common/Loader";

import "../styles/main.scss";

const App = () => (
  <ErrorBoundary fallback={<p>Could not load the data from the API.</p>}>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  </ErrorBoundary>
);

export default App;
