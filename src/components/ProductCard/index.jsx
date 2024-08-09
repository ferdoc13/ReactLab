import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ProductCard = (props) => {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card p-4">
                <div className="position-relative">
                    <img src={`./Images/${props.image}.webp`} alt={`${props.title}`} />
                    {!!props.isDiscounted && <span className="productDiscount badge text-bg-danger">{props.discount}% Off</span> }
                    {!!props.isSpecial && <span className="productSpecial badge text-bg-warning">Special</span> }
                    
                </div>
                <h2>{props.title}</h2>
                <div>
                    <h4>price: {props.price}$</h4>
                    {!!props.isDiscounted && <span className="productPrice">{props.price}/{props.discount}</span> }
                </div>
                <button className="btn btn-primary">ADD To Cart</button>
            </div>
        </div>

    );
};
export default ProductCard;
