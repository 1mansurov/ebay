import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/index";
import "./Single.css";

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="single-product">
      <div className="image-gallery">
        <img src={data?.image} alt={data?.title} className="main-image" />
        <div className="thumbnail-container">
          {data?.additionalImages?.map((image, index) => (
            <img key={index} src={image} alt={data?.title} className="thumbnail" />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">{data?.title}</h2>
        <p className="product-condition">Condition: {data?.condition}</p>
        <p className="product-model">Model: {data?.model}</p>
        <p className="product-carrier">Carrier: {data?.carrier}</p>
        <p className="product-storage">Storage Capacity: {data?.storageCapacity}</p>
        <p className="product-color">Color: {data?.color}</p>
        <p className="product-cosmetic">Cosmetic: {data?.cosmetic}</p>
        <p className="product-price">Price: US ${data?.price}</p>
        <button className="buy-now">Buy It Now</button>
        <button className="add-to-cart">Add to Cart</button>
        <button className="add-to-watchlist">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default Single;
