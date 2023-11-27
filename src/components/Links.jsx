import config from '../utils/config';

export const linksMain = [
    { link: config.baseUrl, val: "Головна" },
    { link: config.baseUrl + "delivery", val: "Доставка і оплата" },
    { link: config.baseUrl + "contacts", val: "Контакти" },
];

export const linksFooter = [
    { link: config.baseUrl + "", val: "Каталог" },
    { link: config.baseUrl + "about", val: "Про нас" },
    { link: config.baseUrl + "delivery", val: "Доставка і оплата" },
    { link: config.baseUrl + "contacts", val: "Контакти" },
];
