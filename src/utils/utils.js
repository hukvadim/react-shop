import config from './config';

// Отримуємо збережені товарів
export function getCartProducts() {
    return JSON.parse(localStorage.getItem(config.storageKey)) || [];
}

// Запам'ятовуємо масив корзини
export function setCartProducts(existingCart) {
    localStorage.setItem(config.storageKey, JSON.stringify(existingCart));
}

// Отримуємо стан корзини відкрита вона чи закрита
export function getCartVisibility() {
    return JSON.parse(localStorage.getItem(config.storageCartVisibility)) || false;
}

// Запам'ятовуємо масив корзини
export function setCartVisibility(cartVisibility) {
    localStorage.setItem(config.storageCartVisibility, JSON.stringify(cartVisibility));
}
