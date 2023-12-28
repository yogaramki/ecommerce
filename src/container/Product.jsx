import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const items = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const addTocart = () => {
    dispatch(addItem(items))
    //console.log(    dispatch(addItem(items)));
  };

  return (
    <div className="card m-2 ">
      <div className="mt-2">
        <img
          src={items.thumbnail}
          height={350}
          width={400}
          alt={items.title}
          className="border-radius-9"
        />
      </div>
      <div className="mt-3 card-body">
        <h5 className="card-title"> {items.title} </h5>
        <h6 className="mt-2"> Price:{`$${items.price}`} </h6>
        <h6 className="mt-2"> Discount:{items.discountPercentage}%</h6>
        <h6 className="mt-2"> Rating:{items.rating}</h6>

        <div className="mt-4">
          {items.stock > 0 ? (
            <>
              <button className="btn btn-success">Buy Now</button>
              <button className="ms-3 btn btn-success" onClick={addTocart}>
                Add to cart
              </button>
            </>
          ) : (
            <button className="btn btn-outline-danger">Out Of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
