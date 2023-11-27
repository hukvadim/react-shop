import { getCartProducts, setCartProducts } from '../utils/utils';

// Отримуємо додані товари з localstorage
const cartAdded = getCartProducts();

// Формуємо початковий стан
const initialCartState = {
    cart: cartAdded,
    cartCount: cartAdded.length,
};

// Пишемо reducer для додавання в корзину
function cartReducer(state, action) {    
    switch (action.type) {
        // Добавлення товару
        case "addToCart":

            // Будемо формувати новий масив доданих товарів
			let updatedCart = [];
            
            // Перевіряємо чи є в стані доданий товар
			const productExistKey = state.cart.findIndex((item) => item.id === action.product.id)

			// Додаємо новий товар або добавляємо кількість
			if (productExistKey !== -1) {
				updatedCart = [...state.cart];
                updatedCart[productExistKey].count++;
			} else {
                action.product.count = 1;
                updatedCart = [...state.cart, action.product];
            }

            // Збережіть оновлений список товарів в localStorage
	        setCartProducts(updatedCart);

            // Повертаємо оновлений стан
            return {
                ...state,
                cart: updatedCart,
                cartCount: updatedCart.length,
            };
        
        // Видалення товару з корзини
        case "removeFromCart":

            // Отримуємо id товару
            const productIdToRemove = action.productId;

            // Видаляємо його з масиву корзини
            const updatedRemovedCart = state.cart.filter((item) => item.id !== productIdToRemove);

            // Збережіть оновлений список товарів в localStorage
            setCartProducts(updatedRemovedCart);

            return {
                ...state,
                cart: updatedRemovedCart,
                cartCount: updatedRemovedCart.length,
            };

        // Додайте інші дії для редуктора за потреби
        default:
            return state;
    }
        
};

export { initialCartState, cartReducer };