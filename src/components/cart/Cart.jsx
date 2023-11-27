import React, { useState } from "react";
import config from '../../utils/config';
import CartNoResult from './CartNoResult';
import CartItem from './CartItem';
import { getCartVisibility, setCartVisibility } from '../../utils/utils';

function Cart({ cartState, dispatch }) {

    // Для зручності витягуємо дані корзини
    const { cart, cartCount } = cartState;

    // Використовуємо useState для збереження стану корзини
    const [cartVisibility, setCartVisibilityEl] = useState(getCartVisibility());

	// Показуємо і приховуємо корзину замовлених товарів
	const toggleCartVisibility = () => {
		setCartVisibilityEl(!cartVisibility);
		setCartVisibility(!cartVisibility);
	};

    // Видалення товару з корзини
    const delCartProduct = (productId) => {
        dispatch({ type: "removeFromCart", productId })
    };

    // Добавляємо кількість товарів
    const increaseItemCount = (productId) => {
        dispatch({ type: "increaseItemCount", productId });
    };

    // Забираємо кількість товарів
    const decreaseItemCount = (productId) => {
        dispatch({ type: "decreaseItemCount", productId });
    };


    return (
        <div className="cart-added-list">
            <button className="cart-added-list__btn" onClick={toggleCartVisibility}>
                <span className={`cart-added-summ js-cart-added-summ ${cartCount > 0 ? 'show-num' : ''}`}>{cartCount}</span>
                <svg className="icon icon-cart-bag"><use href="#icon-cart-bag"></use></svg>
            </button>
            <div className={`cart-added-list__item-list ${cartVisibility ? 'show' : ''}`}>

            {cart.length === 0 ? (
                <CartNoResult />
            ) : (
                cart.map((product, index) => {
                    const cartItemProps = {
                        key: index,
                        pathImg: config.pathImg,
                        product,
                        delCartProduct,
                        increaseItemCount,
                        decreaseItemCount,
                    };

                    return <CartItem {...cartItemProps} />;
                })
            )}
                
            </div>
        </div>
    );
}

export default Cart;
