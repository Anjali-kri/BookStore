// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = (item) => {
    console.log(item.item.name, "item");
  return (
    <>
      <div className="m-4">
        <div className="card w-full md:w-90 bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 duration-200">
        <figure><img src={item.item.image} /></figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.item.name}
              <div className="badge badge-secondary">{item.item.Category}</div>
            </h2>
            <p>{item.item.name}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.item.price}</div>
              <div className="badge badge-outline hover:bg-pink-400 hover:text-white duration-200 px-2 py-1">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
