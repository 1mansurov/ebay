import React from "react";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <div className="max-w-[1219px] mx-auto">
      <ul className="flex">
        {[
          ["Home", "/"],
          ["Saved", "/saved"],
          ["Motors", "/motors"],
          ["Electronics", "/electronics"],
          ["Collections", "/collections"],
          ["Fashion", "/fashion"],
          ["Toys", "/toys"],
          ["Sporting", "/sporting-goods"],
          ["Business & Industrial", "/business-industrial"],
          ["Jewelry", "/jewelry"],
          ["eBay Deals", "/deals"],
          ["Refburished", "/refurbished"],
        ].map(([name, path]) => (
          <Link className="py-2 px-4 text-[#555555] text-nowrap" to={path} key={path}>
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
