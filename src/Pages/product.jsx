import { useParams } from "react-router-dom";

function Product() {
    const params = useParams()
    // console.log(params)
    return (
      <div>
        Product{params.productId}
      </div>
    );
  }
  
export default Product;