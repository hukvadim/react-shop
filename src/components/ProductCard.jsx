import React from "react";
import config from '../utils/config';

export default function ProductCard({ product, cartState, dispatch }) {

	const { id, title, img, price, oldprice } = product;

    const setAddToCart = () => {
        dispatch({ type: "addToCart", product })
    };

    return (
        <div className="card-product" key={id}>
            <div className="card-product__img-hold">
                <img src={config.pathImg + img} alt={title} className="card-product__img" />
            </div>
            <div className="card-product__text-hold">
				<div className="card-product__title-link">{title}</div>
                <span className="card-product__price">
                    {price} грн <small>{oldprice} грн</small>
                </span>
                <div className="card-product__btn-add" onClick={setAddToCart}>
                    <svg className="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                </div>
            </div>
        </div>
    );
}
 