import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";


export default function AllProducts () {
  
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );

    setProducts(data.data);
    console.log(products._id);
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      

      

      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-3">
              <Products product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
}
