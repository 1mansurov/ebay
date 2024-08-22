import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/index";

const Deals = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/products");
        setData(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mt-12 mb-8">
        <h2>Today's Deals – All With Free Shipping</h2>
      <div className="flex gap-8">
        {data?.slice(14, 19).map((product) => (
          <Link key={product.id} to={`/single-product/${product.id}`}>
            <div className="size-[208px] bg-[#F7F7F7]">
              <img
                className="object-contain"
                title={product.title}
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <p className="text-center line-clamp-2">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Deals;
