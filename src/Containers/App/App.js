import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Loading = lazy(() => import("../../Components/Loading/Loading"));
const Header = lazy(() => import('./Header/Header'));
const Body = lazy(() => import("./Body/Body"));

const App = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Header />
        <Body />
        {/* here we can put footer componet */}
        <Loading />
      </Suspense>
    </div>
  );
}

export default App;
