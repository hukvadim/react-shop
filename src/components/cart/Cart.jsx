import React, { useState } from "react";
import config from '../../utils/config';
import CartNoResult from './CartNoResult';
import { getCartVisibility, setCartVisibility } from '../../utils/utils';

function Cart({ cartState, dispatch }) {

    // Для зручності витягуємо дані корзини
    const { cart, cartCount } = cartState;

    // Використовуємо useState для збереження стану корзини
    const [cartVisibility, setCartVisibilityEl] = useState(getCartVisibility());

	// Показуємо і приховуємо корзину замовлених товарів
	const toggleCartVisibility = () => {

		// Використовуємо посилання на DOM-елемент, щоб змінити клас
		setCartVisibilityEl(!cartVisibility);
		setCartVisibility(!cartVisibility);
	};

    // Видалення товару з корзини
    const delCartProduct = (productId) => {
        dispatch({ type: "removeFromCart", productId })
    };


    return (
        <div className="cart-added-list">
            <button className="cart-added-list__btn" onClick={toggleCartVisibility}>
                <span className={`cart-added-summ js-cart-added-summ ${cartCount > 0 ? 'show-num' : ''}`}>{cartCount}</span>
                <svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
            </button>
            <div className={`cart-added-list__item-list ${cartVisibility ? 'show' : ''}`}>

            {cart.length === 0
                
                ? <CartNoResult />
                
                : cart.map(({ id, title, img, price, count }, index) => (
                    
                // Відображення товарів з Local Storage
                <div key={index} className="cart-added-list__item">
                    <button className="cart-added-list__item-btn-delete btn-light" onClick={() => delCartProduct(id)}>
                        <svg className="icon icon-close"><use href="#icon-close"></use></svg>
                    </button>
                    <img src={config.pathImg + img} alt="" className="cart-added-list__item-img" />
                    <p className="cart-added-list__item-text-hold">
                        <span className="cart-added-list__item-title-link">{title}</span>
                        <span className="cart-added-list__item-meta-list">
                            <span className="cart-added-list__item-meta">Ціна: {price} грн</span>
                        </span>
                    </p>
                    <input type="text" className="cart-added-list__item-count" value={count} onChange={(e) => { }}/>
                    <button className="cart-added-list__item-btn-plus btn-light"></button>
                    <button className="cart-added-list__item-btn-minus btn-light"></button>
                </div>
            ))}
                
            </div>
        </div>
    );
}

export default Cart;
