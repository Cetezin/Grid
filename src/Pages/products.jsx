import { Outlet } from "react-router-dom";

function Products() {
    return (
      <div>
        <h3>Products</h3>
        <Outlet />
      </div>
    );
  }
  
export default Products;