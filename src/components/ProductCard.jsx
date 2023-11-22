
export default function ProductCard({ product }) {

	const { title, img, price, oldprice } = product;

    return (
        <div className="card-product">
            <div className="card-product__img-hold">
                <img src={'img/catalog/' + img} alt={title} className="card-product__img" />
            </div>
            <div className="card-product__text-hold">
				<div className="card-product__title-link">{title}</div>
                <span className="card-product__price">
                    {price} грн <small>{oldprice} грн</small>
                </span>
                <div className="card-product__btn-add">
                    <svg className="icon icon-cart"><use href="#icon-cart-add"></use></svg>
                </div>
            </div>
        </div>
    );
}
 