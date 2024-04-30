import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

let About = lazy(() => import("./Pages/about"));
let Home = lazy(() => import("./Pages/home"));
let Products = lazy(() => import("./Pages/products"));
let Product = lazy(() => import("./Pages/product"));

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* each route will be children */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* list the steps to create another route 
  1. Create the route and export it
  2. Lazy load the the import file inside the AppRouter
  3. setup the route for the product
  */}
        <Route path="/products" element={<Products />}>
          {/* children here are nested routes */}
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route
          path="*"
          Component={() => (
            <div>
              <h1>Error</h1>
            </div>
          )}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
