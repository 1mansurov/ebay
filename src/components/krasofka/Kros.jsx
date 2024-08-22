import React, { useEffect, useState } from "react";
import "./kros.css";
import { Link } from "react-router-dom";
import axios from "../../api/index";

const Kros = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  console.log(products);

  return (
    <div className="kros">
      <div className="max-w-[1200px] mx-auto">
        <h2>Product List</h2>
        <div className="kros__products place-items-center gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 40).map((product) => (
            <div key={product.id} className="kros__product">
              <Link to={`/single-product/${product.id}`}>
                <img
                  className="size-[241px] object-contain"
                  title={product.title}
                  src={product.images[0]}
                  alt={product.title}
                />
              </Link>
              <h3 className="line-clamp-1 text-[15px]">{product.title}</h3>
              <p className="line-clamp-3 text-[13px] text-left">
                {product.description}
              </p>
              <p className="kros__price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kros;
